package com.athpotha.carrierGuidanceSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.athpotha.carrierGuidanceSystem.model.Admin;
import com.athpotha.carrierGuidanceSystem.model.Commiunity;
import com.athpotha.carrierGuidanceSystem.model.ConfirmationToken;
import com.athpotha.carrierGuidanceSystem.model.Student;
import com.athpotha.carrierGuidanceSystem.model.Tutor;
import com.athpotha.carrierGuidanceSystem.model.University;
import com.athpotha.carrierGuidanceSystem.model.User;
import com.athpotha.carrierGuidanceSystem.repository.AdminRepository;
import com.athpotha.carrierGuidanceSystem.repository.CommiunityRepository;
import com.athpotha.carrierGuidanceSystem.repository.ConfirmationTokenRepository;
import com.athpotha.carrierGuidanceSystem.repository.StudentRepository;
import com.athpotha.carrierGuidanceSystem.repository.TutorRepository;
import com.athpotha.carrierGuidanceSystem.repository.UniversityRepository;
import com.athpotha.carrierGuidanceSystem.repository.UserRepository;
import com.athpotha.carrierGuidanceSystem.service.EmailService;

@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin
public class UserRegistrationController {
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ConfirmationTokenRepository confirmationTokenRepository;

	@Autowired
	private StudentRepository studentRepository;

	@Autowired
	private TutorRepository tutorRepository;

	@Autowired
	private UniversityRepository universityRepository;

	@Autowired
	private AdminRepository adminRepository;

	@Autowired
	private CommiunityRepository commiunityRepository;

	@Autowired
	private EmailService emailService;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@PostMapping("/check-email")
	public String userLogin(@RequestBody User user) {

		System.out.println(user.getEmail());
		User loginUser = userRepository.findByEmailIgnoreCase(user.getEmail());
		if (loginUser == null) {
			return "EMAIL_OK";
		}
		if (loginUser.isVerified() == false) {
			return "NOT_VERIFIED";
		}
		if (loginUser.isVerified() == true) {
			return "VERIFIED_USER";
		}
//		if (bCryptPasswordEncoder.matches(user.getPassword(), loginUser.getPassword())) {
//			return "PASSWORD_WRONG";
//		}
		return null;
	}

	@PostMapping("/registration")
	public String registerUser(ModelAndView modelAndView, @RequestBody User userEntity) {
		userEntity.setPassword(passwordEncoder.encode(userEntity.getPassword()));
		User existingUser = userRepository.findByEmailIgnoreCase(userEntity.getEmail());
		if (existingUser != null) {
			userRepository.deleteById(userEntity.getUser_id());
			userRegitrationMethod(userEntity);
			modelAndView.addObject("email", userEntity.getEmail());
			return "REGISTRATION_SUCCESS";

		} else {
			userRegitrationMethod(userEntity);
			modelAndView.addObject("email", userEntity.getEmail());
			modelAndView.setViewName("successfulRegisteration");
			return "VERIFICATION_EMAIL_SENT";
		}
//		return modelAndView;
	}

	private void userRegitrationMethod(User userEntity) {
		switch (userEntity.getUser_type()) {
		case student:
			Student student = new Student();
			student.setFirst_name(userEntity.getFirst_name());
			student.setLast_name(userEntity.getLast_name());
			student.setEmail(userEntity.getEmail());
			student.setUser_type(userEntity.getUser_type());
			student.setPassword(userEntity.getPassword());
			student.setProfile_picture(userEntity.getProfile_picture());
			studentRepository.save(student);
			break;
		case admin:
			Admin admin = new Admin();
			admin.setFirst_name(userEntity.getFirst_name());
			admin.setLast_name(userEntity.getLast_name());
			admin.setEmail(userEntity.getEmail());
			admin.setUser_type(userEntity.getUser_type());
			admin.setPassword(userEntity.getPassword());
			admin.setProfile_picture(userEntity.getProfile_picture());
			adminRepository.save(admin);
			break;
		case university:
			University university = new University();
			university.setFirst_name(userEntity.getFirst_name());
			university.setLast_name(userEntity.getLast_name());
			university.setEmail(userEntity.getEmail());
			university.setUser_type(userEntity.getUser_type());
			university.setPassword(userEntity.getPassword());
			university.setProfile_picture(userEntity.getProfile_picture());
			universityRepository.save(university);
			break;
		case tutor:
			Tutor tutor = new Tutor();
			tutor.setFirst_name(userEntity.getFirst_name());
			tutor.setLast_name(userEntity.getLast_name());
			tutor.setEmail(userEntity.getEmail());
			tutor.setUser_type(userEntity.getUser_type());
			tutor.setPassword(userEntity.getPassword());
			tutor.setProfile_picture(userEntity.getProfile_picture());
			tutorRepository.save(tutor);
			break;
		case commiunity:
			Commiunity commiunity = new Commiunity();
			commiunity.setFirst_name(userEntity.getFirst_name());
			commiunity.setLast_name(userEntity.getLast_name());
			commiunity.setEmail(userEntity.getEmail());
			commiunity.setUser_type(userEntity.getUser_type());
			commiunity.setPassword(userEntity.getPassword());
			commiunity.setProfile_picture(userEntity.getProfile_picture());
			commiunityRepository.save(commiunity);
			break;
		}

		System.out.println(userEntity.toString());
		User user = userRepository.findByEmailIgnoreCase(userEntity.getEmail());
		System.out.println(user.toString());
		ConfirmationToken confirmationToken = new ConfirmationToken(user);

		confirmationTokenRepository.save(confirmationToken);

		SimpleMailMessage mailMessage = new SimpleMailMessage();
		mailMessage.setTo(user.getEmail());
		mailMessage.setSubject("Complete Registration!");
		mailMessage.setFrom("godfatherperera12@gmail.com");
		mailMessage.setText("To confirm your account, please click here : "
				+ "http://localhost:8080/api/v1/user/confirm-account?token=" + confirmationToken.getConfirmationToken());

		emailService.sendEmail(mailMessage);
	}

	@RequestMapping(value = "/confirm-account", method = { RequestMethod.GET, RequestMethod.POST })
	public ModelAndView confirmUserAccount(ModelAndView modelAndView, @RequestParam("token") String confirmationToken) {
		ConfirmationToken token = confirmationTokenRepository.findByConfirmationToken(confirmationToken);

		System.out.println("confirmation okay");
		if (token != null) {
			User user = userRepository.findByEmailIgnoreCase(token.getUser().getEmail());
			user.setVerified(true);
			user.setEnabled(true);
			userRepository.save(user);
			modelAndView.setViewName("accountVerified");
		} else {
			modelAndView.addObject("message", "The link is invalid or broken!");
			modelAndView.setViewName("error");
		}

		return modelAndView;
	}

	@RequestMapping(value = "/email-resend", method = RequestMethod.POST)
	public String emailResend(@RequestBody User userEntity) {
//		System.out.println(userEntity.getEmail());
		User user = userRepository.findByEmailIgnoreCase(userEntity.getEmail());
		ConfirmationToken confirmationToken = confirmationTokenRepository.findByUser(user);

		SimpleMailMessage mailMessage = new SimpleMailMessage();
		mailMessage.setTo(userEntity.getEmail());
		mailMessage.setSubject("Complete Registration!");
		mailMessage.setFrom("godfatherperera12@gmail.com");
		mailMessage.setText("To confirm your account, please click here : "
				+ "http://localhost:8080/api/v1/user/confirm-account?token=" + confirmationToken.getConfirmationToken());

		emailService.sendEmail(mailMessage);
		return "REGISTRATION_SUCCESS";
	}

}

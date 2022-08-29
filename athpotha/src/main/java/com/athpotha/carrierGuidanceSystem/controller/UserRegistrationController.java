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
import com.athpotha.carrierGuidanceSystem.model.Community;
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
			userRepository.deleteById(userEntity.getUserId());
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
		switch (userEntity.getUserType()) {
		case student:
			Student student = new Student();
			student.setFirstName(userEntity.getFirstName());
			student.setLastName(userEntity.getLastName());
			student.setEmail(userEntity.getEmail());
			student.setUserType(userEntity.getUserType());
			student.setPassword(userEntity.getPassword());
			student.setProfilePicture(userEntity.getProfilePicture());
			studentRepository.save(student);
			break;
		case admin:
			Admin admin = new Admin();
			admin.setFirstName(userEntity.getFirstName());
			admin.setLastName(userEntity.getLastName());
			admin.setEmail(userEntity.getEmail());
			admin.setUserType(userEntity.getUserType());
			admin.setPassword(userEntity.getPassword());
			admin.setProfilePicture(userEntity.getProfilePicture());
			adminRepository.save(admin);
			break;
		case university:
			University university = new University();
			university.setFirstName(userEntity.getFirstName());
			university.setLastName(userEntity.getLastName());
			university.setEmail(userEntity.getEmail());
			university.setUserType(userEntity.getUserType());
			university.setPassword(userEntity.getPassword());
			university.setProfilePicture(userEntity.getProfilePicture());
			universityRepository.save(university);
			break;
		case tutor:
			Tutor tutor = new Tutor();
			tutor.setFirstName(userEntity.getFirstName());
			tutor.setLastName(userEntity.getLastName());
			tutor.setEmail(userEntity.getEmail());
			tutor.setUserType(userEntity.getUserType());
			tutor.setPassword(userEntity.getPassword());
			tutor.setProfilePicture(userEntity.getProfilePicture());
			tutorRepository.save(tutor);
			break;
		case community:
			Community commiunity = new Community();
			commiunity.setFirstName(userEntity.getFirstName());
			commiunity.setLastName(userEntity.getLastName());
			commiunity.setEmail(userEntity.getEmail());
			commiunity.setUserType(userEntity.getUserType());
			commiunity.setPassword(userEntity.getPassword());
			commiunity.setProfilePicture(userEntity.getProfilePicture());
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
	
	@PostMapping("/university-registration")
	public String registerUniversity(ModelAndView modelAndView, @RequestBody University userEntity) {
		userEntity.setPassword(passwordEncoder.encode(userEntity.getPassword()));
		User existingUser = userRepository.findByEmailIgnoreCase(userEntity.getEmail());
		if (existingUser != null) {
			return null;

		} else {
			universityRepository.save(userEntity);
			return "NOTIFICATION_SEND";
		}
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

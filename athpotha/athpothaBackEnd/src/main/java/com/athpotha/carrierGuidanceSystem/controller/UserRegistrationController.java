package com.athpotha.carrierGuidanceSystem.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.athpotha.carrierGuidanceSystem.model.ConfirmationToken;
import com.athpotha.carrierGuidanceSystem.model.User;
import com.athpotha.carrierGuidanceSystem.repository.ConfirmationTokenRepository;
import com.athpotha.carrierGuidanceSystem.repository.UserRepository;
import com.athpotha.carrierGuidanceSystem.service.EmailService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserRegistrationController {
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ConfirmationTokenRepository confirmationTokenRepository;

	@Autowired
	private EmailService emailService;

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public String registerUser(ModelAndView modelAndView, @RequestBody User userEntity) {
		userEntity.setPassword(passwordEncoder.encode(userEntity.getPassword()));
		User existingUser = userRepository.findByEmailIgnoreCase(userEntity.getEmail());
		System.out.println(userEntity);
		if (existingUser != null) {
			if (existingUser.isVerified() == true) {
				return "USER_ALREADY_REGISTERED";
			} else {
				userRepository.deleteById(userEntity.getUser_id());

				userRepository.save(userEntity);

				ConfirmationToken confirmationToken = new ConfirmationToken(userEntity);

				confirmationTokenRepository.save(confirmationToken);

				SimpleMailMessage mailMessage = new SimpleMailMessage();
				mailMessage.setTo(userEntity.getEmail());
				mailMessage.setSubject("Complete Registration!");
				mailMessage.setFrom("godfatherperera12@gmail.com");
				mailMessage.setText("To confirm your account, please click here : "
						+ "http://localhost:8080/user/confirm-account?token="
						+ confirmationToken.getConfirmationToken());

				emailService.sendEmail(mailMessage);

				modelAndView.addObject("email", userEntity.getEmail());

				return "REGISTRATION_SUCCESS";
			}

		} else {

			userRepository.save(userEntity);

			ConfirmationToken confirmationToken = new ConfirmationToken(userEntity);

			confirmationTokenRepository.save(confirmationToken);

			SimpleMailMessage mailMessage = new SimpleMailMessage();
			mailMessage.setTo(userEntity.getEmail());
			mailMessage.setSubject("Complete Registration!");
			mailMessage.setFrom("godfatherperera12@gmail.com");
			mailMessage.setText("To confirm your account, please click here : "
					+ "http://localhost:8080/user/confirm-account?token=" + confirmationToken.getConfirmationToken());

			emailService.sendEmail(mailMessage);

			modelAndView.addObject("email", userEntity.getEmail());

			modelAndView.setViewName("successfulRegisteration");

			return "VERIFICATION_EMAIL_SENT";
		}
//		return modelAndView;
	}

	@RequestMapping(value = "/confirm-account", method = { RequestMethod.GET, RequestMethod.POST })
	public ModelAndView confirmUserAccount(ModelAndView modelAndView, @RequestParam("token") String confirmationToken) {
		ConfirmationToken token = confirmationTokenRepository.findByConfirmationToken(confirmationToken);

		if (token != null) {
			User user = userRepository.findByEmailIgnoreCase(token.getUser().getEmail());
			user.setVerified(true);
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
		System.out.println(userEntity.getEmail());
		User user = userRepository.findByEmailIgnoreCase(userEntity.getEmail());
		ConfirmationToken confirmationToken = confirmationTokenRepository.findByUser(user);

		SimpleMailMessage mailMessage = new SimpleMailMessage();
		mailMessage.setTo(userEntity.getEmail());
		mailMessage.setSubject("Complete Registration!");
		mailMessage.setFrom("godfatherperera12@gmail.com");
		mailMessage.setText("To confirm your account, please click here : "
				+ "http://localhost:8080/user/confirm-account?token=" + confirmationToken.getConfirmationToken());

		emailService.sendEmail(mailMessage);
		return "REGISTRATION_SUCCESS";
	}
}

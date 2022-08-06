package com.athpotha.carrierGuidanceSystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.athpotha.carrierGuidanceSystem.model.User;
import com.athpotha.carrierGuidanceSystem.repository.UserRepository;
import com.athpotha.carrierGuidanceSystem.responses.UserInfo;

@RestController
@RequestMapping("/user-login")
@CrossOrigin
public class UserLoginController {
	@Autowired
	private UserRepository userRepo;
//	private StudentService studentService;

	@PostMapping("/login")
	public String userLogin(@RequestBody User user) {
		BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

		User loginUser = userRepo.findByEmailIgnoreCase(user.getEmail());
		if (loginUser == null) {
			return "EMAIL_WRONG";
		}
		if (loginUser.isEnabled() == false) {
			return "NOT_VERIFIED";
		}
		if (bCryptPasswordEncoder.matches(user.getPassword(), loginUser.getPassword())) {
			return "PASSWORD_WRONG";
		}
		return null;
	}

//	@GetMapping("/getUser")
//	public UserInfo getUserDetails(@RequestBody String email) {
//
//		UserInfo userInfo = new UserInfo();
//		User loggedUser = userRepo.findByEmailIgnoreCase(email);
//
//		userInfo.setEmail(loggedUser.getEmail());
//		userInfo.setFirstName(loggedUser.getFirst_name());
//		userInfo.setLastName(loggedUser.getLast_name());
//		userInfo.setUserType(loggedUser.getUser_type());
//		return userInfo;
//
//	}

}

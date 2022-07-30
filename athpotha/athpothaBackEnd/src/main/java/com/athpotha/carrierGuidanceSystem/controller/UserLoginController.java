package com.athpotha.carrierGuidanceSystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.athpotha.carrierGuidanceSystem.model.User;
import com.athpotha.carrierGuidanceSystem.repository.UserRepository;

//@RestController
//@RequestMapping("/student")
//@CrossOrigin
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
//		userEntity.setPassword(bCryptPasswordEncoder.encode(userEntity.getPassword()));
		String hashedPassword = bCryptPasswordEncoder.encode(user.getPassword());
		User loginUser = userRepo.findByEmailIgnoreCase(user.getEmail());
		if(loginUser != null) {
			return "EMAIL_WRONG";
		}
		if(loginUser.isEnabled() == false) {
			return "NOT_VERIFIED";
		}
		if(hashedPassword != loginUser.getPassword()) {
			return "PASSWORD_WRONG";
		}
		return null;
	}

}

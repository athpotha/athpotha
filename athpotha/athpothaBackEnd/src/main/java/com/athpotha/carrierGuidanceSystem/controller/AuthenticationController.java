package com.athpotha.carrierGuidanceSystem.controller;

import java.security.NoSuchAlgorithmException;
import java.security.Principal;
import java.security.spec.InvalidKeySpecException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.athpotha.carrierGuidanceSystem.config.JWTTokenHelper;
import com.athpotha.carrierGuidanceSystem.model.User;
import com.athpotha.carrierGuidanceSystem.requests.AuthenticationRequest;
import com.athpotha.carrierGuidanceSystem.responses.LoginResponse;
import com.athpotha.carrierGuidanceSystem.responses.UserInfo;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class AuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	JWTTokenHelper jWTTokenHelper;

	@Autowired
	private UserDetailsService userDetailsService;

	@PostMapping("/auth/login")
	public ResponseEntity<?> login(@RequestBody AuthenticationRequest authenticationRequest)
			throws InvalidKeySpecException, NoSuchAlgorithmException {

//		System.out.println(authenticationRequest);
		final Authentication authentication = authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(),
						authenticationRequest.getPassword()));

		User user = (User) authentication.getPrincipal();
		String jwtToken = jWTTokenHelper.generateToken(user.getUsername());

		LoginResponse response = new LoginResponse();
		response.setToken(jwtToken);

		return ResponseEntity.ok(response);
	}

//	@GetMapping("/auth/userinfo")
//	public ResponseEntity<?> getUserInfo(@RequestBody User user) {
//		User userEntity = (User) userDetailsService.loadUserByUsername(user.getUsername());
//		System.out.println("hello world");
//		UserInfo userInfo = new UserInfo();
//
//		userInfo.setEmail(userEntity.getEmail());
//		userInfo.setFirstName(userEntity.getFirst_name());
//		userInfo.setLastName(userEntity.getLast_name());
//		userInfo.setUserType(userEntity.getUser_type());
//
////		return ResponseEntity.ok(userInfo);
////		UserInfo userInfo = new UserInfo();
////		userInfo
//		return ResponseEntity.ok(userInfo);
//	}

	@PostMapping("auth/userinfo")
	public UserInfo getRegisteredUserInfo(@RequestBody User user) {
		User userEntity = (User) userDetailsService.loadUserByUsername(user.getEmail());
		UserInfo userInfo = new UserInfo();
//
		userInfo.setEmail(userEntity.getEmail());
		userInfo.setFirstName(userEntity.getFirst_name());
		userInfo.setLastName(userEntity.getLast_name());
		userInfo.setUserType(userEntity.getUser_type());
//		return userInfo;
		System.out.println("hello User info");
		return userInfo;
	}
}

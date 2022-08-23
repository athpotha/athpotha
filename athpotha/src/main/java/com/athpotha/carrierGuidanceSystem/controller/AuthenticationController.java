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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.athpotha.carrierGuidanceSystem.config.JWTTokenHelper;
import com.athpotha.carrierGuidanceSystem.model.Admin;
import com.athpotha.carrierGuidanceSystem.model.Community;
import com.athpotha.carrierGuidanceSystem.model.Student;
import com.athpotha.carrierGuidanceSystem.model.Tutor;
import com.athpotha.carrierGuidanceSystem.model.University;
import com.athpotha.carrierGuidanceSystem.model.User;
import com.athpotha.carrierGuidanceSystem.repository.AdminRepository;
import com.athpotha.carrierGuidanceSystem.repository.CommiunityRepository;
import com.athpotha.carrierGuidanceSystem.repository.StudentRepository;
import com.athpotha.carrierGuidanceSystem.repository.TutorRepository;
import com.athpotha.carrierGuidanceSystem.repository.UniversityRepository;
import com.athpotha.carrierGuidanceSystem.requests.AuthenticationRequest;
import com.athpotha.carrierGuidanceSystem.responses.LoginResponse;
import com.athpotha.carrierGuidanceSystem.responses.UserInfo;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/auth")
public class AuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	JWTTokenHelper jWTTokenHelper;

	@Autowired
	private UserDetailsService userDetailsService;
	
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
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody AuthenticationRequest authenticationRequest)
			throws InvalidKeySpecException, NoSuchAlgorithmException {

//		System.out.println(authenticationRequest.toString());
		final Authentication authentication = authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getEmail(),
						authenticationRequest.getPassword()));

		User user = (User) authentication.getPrincipal();
		String jwtToken = jWTTokenHelper.generateToken(user.getUsername());
//		System.out.println(user.toString());

		LoginResponse response = new LoginResponse();
		response.setToken(jwtToken);

		return ResponseEntity.ok(response);
	}

	@PostMapping("/userinfo")
	public ResponseEntity<?> getUserInfo(@RequestBody User user) {
		User userEntity = (User) userDetailsService.loadUserByUsername(user.getUsername());

		switch (userEntity.getUser_type()) {
		case student:
			Student student = studentRepository.findByEmailIgnoreCase(userEntity.getUsername());
			return ResponseEntity.ok(student);
//			break;
		case tutor:
			Tutor tutor = tutorRepository.findByEmailIgnoreCase(userEntity.getUsername());
			return ResponseEntity.ok(tutor);
//			break;
		case university:
			University university = universityRepository.findByEmailIgnoreCase(userEntity.getUsername());
			return ResponseEntity.ok(university);
//			break;
		case admin:
			Admin admin = adminRepository.findByEmailIgnoreCase(userEntity.getUsername());
			return ResponseEntity.ok(admin);
//			break;
		case community:
			Community commiunity = commiunityRepository.findByEmailIgnoreCase(userEntity.getUsername());
			return ResponseEntity.ok(commiunity);
		}
		return null;
	}
	
	@PutMapping("/set-login")
	public void setHasLogin(@RequestBody User user) {
		User userEntity = (User) userDetailsService.loadUserByUsername(user.getUsername());

		switch (userEntity.getUser_type()) {
		case student:
			Student student = studentRepository.findByEmailIgnoreCase(userEntity.getUsername());
			student.setHasLogged(true);
			break;
		case tutor:
			Tutor tutor = tutorRepository.findByEmailIgnoreCase(userEntity.getUsername());
			tutor.setHasLogged(true);
			break;
		case university:
			University university = universityRepository.findByEmailIgnoreCase(userEntity.getUsername());
			university.setHasLogged(true);
			break;
		case admin:
			Admin admin = adminRepository.findByEmailIgnoreCase(userEntity.getUsername());
			admin.setHasLogged(true);
			break;
		case community:
			Community commiunity = commiunityRepository.findByEmailIgnoreCase(userEntity.getUsername());
			commiunity.setHasLogged(true);
			break;
		}
	}

}

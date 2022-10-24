package com.athpotha.carrierGuidanceSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.athpotha.carrierGuidanceSystem.model.University;
import com.athpotha.carrierGuidanceSystem.model.User;
import com.athpotha.carrierGuidanceSystem.repository.AdminRepository;
import com.athpotha.carrierGuidanceSystem.repository.UniversityRepository;
import com.athpotha.carrierGuidanceSystem.repository.UserRepository;
import com.athpotha.carrierGuidanceSystem.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {
	@Autowired
	private AdminService adminService;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UniversityRepository universityRepository;
	
	@PostMapping("/getAll")
	public List<User> getAllUsers() {
		return userRepository.findAll();
		
//		return userRepository.findAll();
	}
	
	@PostMapping("/getAllUni")
	public List<University> getAllUni() {
		return universityRepository.findAll();
	}
	
	@PostMapping("/getUser/{userId}")
	public User getUser(@PathVariable long userId) {
		System.out.println("User id"+userId);
		return userRepository.findByUserId(userId);
	}
}
	

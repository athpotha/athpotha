package com.athpotha.carrierGuidanceSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
	
//	@Autowired
//	private UserRepository userRepository;
	
	@PostMapping("/getAll")
	public List<User> getAllUsers() {
		return adminService.getAllUsers();
//		return userRepository.findAll();
	}
}
	

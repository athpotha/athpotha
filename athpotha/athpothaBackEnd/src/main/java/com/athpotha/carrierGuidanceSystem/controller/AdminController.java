package com.athpotha.carrierGuidanceSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
		return userRepository.findByUserDeletedFalse();
		
//		return userRepository.findAll();
	}
	@PostMapping("/getAllUni")
public List<University> getAllUni() {
		int x = 0;
		return universityRepository.findAllByIsVerified(x);
	}
	
	@PostMapping("/getUser/{userId}")
	public User getUser(@PathVariable long userId) {
//		System.out.println("User id"+userId);
		return userRepository.findByUserId(userId);
	}
	
//	@PutMapping("/updateUser/{userId}")
//	public ResponseEntity  updateUser(@PathVariable long userId, @RequestBody User updatedUser){
//		System.out.println("User id"+userId);
//	User newUpdatedUser = userRepository.save(updatedUser);
//	return ResponseEntity.ok(newUpdatedUser);
//		
//	}
//	
	@PutMapping("/deleteUser/{userId}")
	public ResponseEntity deleteUser(@PathVariable long userId) {
		User user = userRepository.findByUserId(userId);
		user.setUserDeleted(true);
		userRepository.save(user); 
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PostMapping("/getTotUsers")
	public int getTotUsers() {
		int tot = userRepository.getTotUsers();
		return(tot);
	}
	

	@PostMapping("/getNewUsers")
	public int getNewUsers() {
		int newUsers = userRepository.getNewUsers();
		return(newUsers);
	}
	
	@PutMapping("/verifyUser/{userId}")
	public ResponseEntity verifyUser(@PathVariable long userId) {
		University uni = universityRepository.findByUserId(userId);
		int x=1;
		uni.setIsVerified(x);
		universityRepository.save(uni); 
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	
	@PutMapping("/rejectUser/{userId}")
	public ResponseEntity rejectUser(@PathVariable long userId) {
		University uni = universityRepository.findByUserId(userId);
		int x = 2;
		uni.setIsVerified(x);
		universityRepository.save(uni); 
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	
}
	

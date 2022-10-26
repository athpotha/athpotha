package com.athpotha.carrierGuidanceSystem.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.config.web.servlet.oauth2.login.UserInfoEndpointDsl;
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
import com.athpotha.carrierGuidanceSystem.model.UserType;
import com.athpotha.carrierGuidanceSystem.repository.AdminRepository;
import com.athpotha.carrierGuidanceSystem.repository.UniversityRepository;
import com.athpotha.carrierGuidanceSystem.repository.UserRepository;
import com.athpotha.carrierGuidanceSystem.service.AdminService;

import net.bytebuddy.description.modifier.EnumerationState;

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
	    List <User> userList = new ArrayList<User>();
	    List <User> newUserList = new ArrayList<User>();
	    userList = userRepository.findByUserDeletedFalse();
	    for (User user : userList) {
	        if (user.getUserType().equals(UserType.university)) {
	            University university = universityRepository.findByUserId(user.getUserId());
	            if(university.getIsVerified() == 1) {
	                newUserList.add(university);
	            }
	            
	        }
	        else {
	            newUserList.add(user);
	        }
	    }
		return newUserList;
		
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
	
	@PutMapping("/updateUser/{userId}")
	public ResponseEntity  updateUser(@PathVariable long userId, @RequestBody University updatedUser){
		System.out.println("updated user "+userId);
		if(updatedUser.getUserType() == UserType.university) {
		University university = universityRepository.findByUserId(userId);
		university.setFirstName(updatedUser.getFirstName());
		university.setLastName(updatedUser.getLastName());
		university.setUserType(updatedUser.getUserType());
		university.setEmail(updatedUser.getEmail());
		university.setUniversity(updatedUser.getUniversity());
		university.setFaculty(updatedUser.getFaculty());		
		universityRepository.save(university);
		System.out.println("Updated university "+university);
		} else if(updatedUser.getUserType() == UserType.community || updatedUser.getUserType() == UserType.student	|| updatedUser.getUserType() == UserType.tutor) {
			User user = userRepository.findByUserId(userId);
			user.setFirstName(updatedUser.getFirstName());
			user.setLastName(updatedUser.getLastName());
			user.setUserType(updatedUser.getUserType());
			user.setEmail(updatedUser.getEmail());
			userRepository.save(user);
			System.out.println("Updated user "+user);
		}

		System.out.println("Updated User"+updatedUser);
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	
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
		User user = userRepository.findByUserId(userId);
		user.setEnabled(true);
		user.setVerified(true);
		userRepository.save(user);
		
		University uni = universityRepository.findByUserId(userId);
		int x=1;
		uni.setIsVerified(x);
		universityRepository.save(uni); 
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	
	@PutMapping("/rejectUser/{userId}")
	public ResponseEntity rejectUser(@PathVariable long userId) {
		User user = userRepository.findByUserId(userId);
		user.setEnabled(false);
		user.setVerified(false);
		userRepository.save(user);
		
		University uni = universityRepository.findByUserId(userId);
		int x = 2;
		uni.setIsVerified(x);
		universityRepository.save(uni); 
		return new ResponseEntity<>(HttpStatus.OK);
		
	}
	
}
	

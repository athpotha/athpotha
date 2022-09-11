package com.athpotha.carrierGuidanceSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.athpotha.carrierGuidanceSystem.model.User;
import com.athpotha.carrierGuidanceSystem.repository.UserRepository;
import com.athpotha.carrierGuidanceSystem.responses.UserInfo;

public class UserInfoService {

	private UserRepository userRepo;

	public User saveUser(User user) {
		return userRepo.save(user);
	}
	

	public List<User> getAllUsers() {
		return userRepo.findAll();
	}
	
	public User getUserInfo(String email) {
		return userRepo.findByEmailIgnoreCase(email);
	}
}

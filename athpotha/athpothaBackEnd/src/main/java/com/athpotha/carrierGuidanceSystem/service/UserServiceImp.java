package com.athpotha.carrierGuidanceSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.athpotha.carrierGuidanceSystem.model.User;
import com.athpotha.carrierGuidanceSystem.repository.UserRepository;
import com.athpotha.carrierGuidanceSystem.repository.UserRepositoryImp;

@Service
public class UserServiceImp implements UserService {
	@Autowired
	private UserRepository userRepo;
	
	
	@Override
	public User saveUser(User user) {
		return userRepo.save(user);
	}
	
	@Override
	public List<User> getAllUsers() {
		return userRepo.findAll();
	}
}

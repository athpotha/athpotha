package com.athpotha.carrierGuidanceSystem.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.athpotha.carrierGuidanceSystem.model.User;
import com.athpotha.carrierGuidanceSystem.repository.UserRepository;

@Service
public class AdminServiceImp implements AdminService{
	
	private UserRepository userRepository;

	@Override
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

}

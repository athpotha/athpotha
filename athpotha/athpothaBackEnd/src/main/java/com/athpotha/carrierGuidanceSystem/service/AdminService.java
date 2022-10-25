package com.athpotha.carrierGuidanceSystem.service;

import java.util.List;

import com.athpotha.carrierGuidanceSystem.model.User;

public interface AdminService {

	List<User> getAllUsers();

	User getUser(Long userId);
	
}

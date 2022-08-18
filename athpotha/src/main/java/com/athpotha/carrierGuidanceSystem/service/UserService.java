package com.athpotha.carrierGuidanceSystem.service;

import java.util.List;


import com.athpotha.carrierGuidanceSystem.model.User;

public interface UserService {
	public User saveUser(User user);
	public List<User> getAllUsers();
}

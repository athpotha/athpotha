package com.athpotha.carrierGuidanceSystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.athpotha.carrierGuidanceSystem.model.User;
import com.athpotha.carrierGuidanceSystem.repository.UserRepository;

@RestController("/api/v1/follow")
public class FollowController {
	
	@Autowired
	private UserRepository userRepo;
	
	@RequestMapping("/add-follow")
	public void addFollow(@RequestParam("follower_id") Long followerId, @RequestParam("following_id") Long followingId) {
		User follower = userRepo.findByUserId(followerId);
		User following = userRepo.findByUserId(followingId);
		
		
	}
}

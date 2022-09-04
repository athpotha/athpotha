package com.athpotha.carrierGuidanceSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.athpotha.carrierGuidanceSystem.model.User;
import com.athpotha.carrierGuidanceSystem.repository.UserRepository;

@RestController
@RequestMapping("/api/v1/follow")
@CrossOrigin
public class FollowController {
	
	@Autowired
	private UserRepository userRepo;
	
	@PutMapping("/add-follow")
	public void addFollow(@RequestParam("follower_id") Long followerId, @RequestParam("following_id") Long followingId) {
		User follower = userRepo.findByUserId(followerId);
		User following = userRepo.findByUserId(followingId);
		
		follower.addFollow(following);
		userRepo.save(follower);
	}
	
	@PostMapping("/get-follow")
	public List<User> getFollow(@RequestParam("following_id") Long followingId) {
		User user = userRepo.findByUserId(followingId);
		return userRepo.findByFollowing(user);
	}
}

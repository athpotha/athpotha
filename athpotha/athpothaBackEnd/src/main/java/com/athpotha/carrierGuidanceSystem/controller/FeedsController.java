package com.athpotha.carrierGuidanceSystem.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.athpotha.carrierGuidanceSystem.model.Category;
import com.athpotha.carrierGuidanceSystem.model.OnlinePost;
import com.athpotha.carrierGuidanceSystem.model.User;
import com.athpotha.carrierGuidanceSystem.model.UserFeeds;
import com.athpotha.carrierGuidanceSystem.repository.OnlinePostRepository;
import com.athpotha.carrierGuidanceSystem.repository.UserRepository;
import com.athpotha.carrierGuidanceSystem.service.CategoryService;

@RestController
@RequestMapping("/api/v1/feeds")
@CrossOrigin
public class FeedsController {
	@Autowired
	private UserRepository userRepo;

	@Autowired
	private CategoryService categoryService;

	@Autowired
	private OnlinePostRepository onlinePostRepository;

	@PostMapping("/get-user-postByFollowing")
	public ResponseEntity<?> getUserPosts(@RequestBody User userEntity) {
		ArrayList<OnlinePost> userFeeds = new ArrayList<>();
		ArrayList<OnlinePost> userPosts = new ArrayList<>();
		User user = userRepo.findByUserId(userEntity.getUserId());

		List<User> userFollowing = userRepo.findByFollowing(user);
		for (int i = 0; i < userFollowing.size(); i++) {
			for (OnlinePost onlinePost : onlinePostRepository.findAllByUserOrderByPostIdDesc(userFollowing.get(i))) {
				userPosts.add(onlinePost);
			}
		}

		for (int i = 0; i < userPosts.size(); i++) {
			if (!userPosts.get(i).getUsers().contains(user)) {
				userFeeds.add(userPosts.get(i));
			}
		}

		return ResponseEntity.ok(userFeeds);
	}

	@PostMapping("/get-user-postByCategory")
	public ResponseEntity<?> getUserPostsByFollowing(@RequestBody User userEntity) {
		ArrayList<OnlinePost> userFeeds = new ArrayList<>();
		ArrayList<OnlinePost> userPosts = new ArrayList<>();
		User user = userRepo.findByUserId(userEntity.getUserId());
		List<Category> userCategories = categoryService.getUserCategory(user);

		for (int i = 0; i < userCategories.size(); i++) {
			for (OnlinePost onlinePost : onlinePostRepository.findAllByCategoryOrderByPostIdDesc(userCategories.get(i))) {
				userPosts.add(onlinePost);
			}
		}

		for (int i = 0; i < userPosts.size(); i++) {
			if (!userPosts.get(i).getUsers().contains(user)) {
				userFeeds.add(userPosts.get(i));
			}
		}

		return ResponseEntity.ok(userFeeds);
	}

	@PostMapping("/set-post-seen")
	public void setPostSeen(@RequestParam("postId") String postId, @RequestParam("userId") String userId) {
		OnlinePost onlinePost = onlinePostRepository.findByPostId(Long.parseLong(postId));
		User user = userRepo.findByUserId(Long.parseLong(userId));

		if (!onlinePost.getUsers().contains(user)) {
			onlinePost.addUser(user);
			onlinePostRepository.save(onlinePost);
		}
	}

	@PostMapping("/test")
	public void getusersposts() {
		System.out.println("hello world");
	}
}

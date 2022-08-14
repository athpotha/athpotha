package com.athpotha.carrierGuidanceSystem.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.athpotha.carrierGuidanceSystem.model.AddPost;
import com.athpotha.carrierGuidanceSystem.model.OnlinePost;
import com.athpotha.carrierGuidanceSystem.model.Post;
import com.athpotha.carrierGuidanceSystem.model.Student;
import com.athpotha.carrierGuidanceSystem.model.UserInfo;
import com.athpotha.carrierGuidanceSystem.repository.OnlinePostRepository;
import com.athpotha.carrierGuidanceSystem.repository.PostRepository;
import com.athpotha.carrierGuidanceSystem.repository.StudentRepository;

@RestController
@RequestMapping("api/v1/post")
@CrossOrigin
public class OnliePostsController {
//	@Autowired
//	private OnlinePostRepository onlinePostRepo;
	
	@Autowired
	private PostRepository postRepo;
	
	@Autowired
	private StudentRepository studentRepo;
	
	@Autowired
	private OnlinePostRepository onlinePostRepo;
	
	@PostMapping("/add-post")
	public void addPost(@RequestBody AddPost post) {
		Student student = studentRepo.findByEmailIgnoreCase(post.getEmail());
		Post newPost = new Post();
		newPost.setStudent(student);
		newPost.setTitle(post.getTitle());
		newPost.setType(post.getType());
		postRepo.save(newPost);
//		Student student = 
//		System.out.println();
	}
	
	@PostMapping("/get-own-posts")
	public List<OnlinePost> getOwnPosts(@RequestBody UserInfo userInfo) {
		System.out.println(userInfo.getUserId());
		
//		ArrayList<OnlinePost> onlinePosts = onlinePostRepo.findById(userInfo.getUserId());
		Student student = studentRepo.findByEmailIgnoreCase(userInfo.getEmail());
		List<OnlinePost> onlinePosts = onlinePostRepo.findAllByStudent(student);
		
		printData(onlinePosts);
		return onlinePosts;
		
	}
	
	public void printData(List<OnlinePost> posts) {
		for(int i = 0; i < posts.size(); i++) {
			System.out.println(posts.get(i).getAddedTime());
		}
	}
}

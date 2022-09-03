package com.athpotha.carrierGuidanceSystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.athpotha.carrierGuidanceSystem.model.Comment;
import com.athpotha.carrierGuidanceSystem.model.OnlinePost;
import com.athpotha.carrierGuidanceSystem.model.User;
import com.athpotha.carrierGuidanceSystem.repository.CategoryRepository;
import com.athpotha.carrierGuidanceSystem.repository.CommentRepository;
import com.athpotha.carrierGuidanceSystem.repository.OnlinePostRepository;
import com.athpotha.carrierGuidanceSystem.repository.PostRepository;
import com.athpotha.carrierGuidanceSystem.repository.QuestionRepository;
import com.athpotha.carrierGuidanceSystem.repository.UserRepository;

@RestController
@RequestMapping("api/v1/comment")
@CrossOrigin
public class CommentController {

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private OnlinePostRepository onlinePostRepo;
	
	@Autowired
	private CommentRepository commentRepo;

	@PostMapping("/add-comment")
	public void addComment(@RequestParam(name = "comment") String commentSubject, 
			@RequestParam(name = "userId") String userId, 
			@RequestParam(name="postId") String postId) {
		User user = userRepo.findByUserId(Long.parseLong(userId));
		Comment comment = new Comment();
		comment.setUser(user);
		comment.setComment(commentSubject);
		OnlinePost onlinePost = onlinePostRepo.findByPostId(Long.parseLong(postId));
		commentRepo.save(comment);
		onlinePost.addComent(comment);
		onlinePostRepo.save(onlinePost);
//		comment
	}
	
	@PostMapping("/get-comments")
	public ResponseEntity<?> getComments(@RequestParam(name="postId") String postId) {
		OnlinePost onlinePost = onlinePostRepo.findByPostId(Long.parseLong(postId));
		return ResponseEntity.ok(onlinePost);
	}
}

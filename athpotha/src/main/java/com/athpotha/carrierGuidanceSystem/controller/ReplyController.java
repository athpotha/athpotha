package com.athpotha.carrierGuidanceSystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.athpotha.carrierGuidanceSystem.model.Comment;
import com.athpotha.carrierGuidanceSystem.model.OnlinePost;
import com.athpotha.carrierGuidanceSystem.model.Reply;
import com.athpotha.carrierGuidanceSystem.model.User;
import com.athpotha.carrierGuidanceSystem.repository.CategoryRepository;
import com.athpotha.carrierGuidanceSystem.repository.CommentRepository;
import com.athpotha.carrierGuidanceSystem.repository.OnlinePostRepository;
import com.athpotha.carrierGuidanceSystem.repository.PostRepository;
import com.athpotha.carrierGuidanceSystem.repository.QuestionRepository;
import com.athpotha.carrierGuidanceSystem.repository.ReplyRepository;
import com.athpotha.carrierGuidanceSystem.repository.UserRepository;

@CrossOrigin
@RestController
@RequestMapping("api/v1/reply")
public class ReplyController {

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private OnlinePostRepository onlinePostRepo;
	
	@Autowired
	private CommentRepository commentRepo;
	
	@Autowired
	private ReplyRepository replyRepo;

	@PostMapping("/add-reply")
	public void addComment(@RequestParam(name = "reply") String replySubject, 
			@RequestParam(name = "userId") String userId, 
			@RequestParam(name="commentId") String commentId) {

		User user = userRepo.findByUserId(Long.parseLong(userId));
		Reply reply = new Reply();
		reply.setUser(user);
		reply.setReply(replySubject);
		Comment comment = commentRepo.findByCommentId(Long.parseLong(commentId));
		replyRepo.save(reply);
		comment.addReply(reply);
		commentRepo.save(comment);
	}
}

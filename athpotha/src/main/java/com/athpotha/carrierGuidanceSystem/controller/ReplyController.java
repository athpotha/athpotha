package com.athpotha.carrierGuidanceSystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.athpotha.carrierGuidanceSystem.model.Comment;
import com.athpotha.carrierGuidanceSystem.model.OnlinePost;
import com.athpotha.carrierGuidanceSystem.model.Reply;
import com.athpotha.carrierGuidanceSystem.model.ReplyType;
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
	public void addReply(@RequestParam(name = "reply") String replySubject,
			@RequestParam(name = "userId") String userId, @RequestParam(name = "commentId") String commentId,
			@RequestParam(name = "replyType") ReplyType replyType) {

		if (replyType == ReplyType.comment) {
			User user = userRepo.findByUserId(Long.parseLong(userId));
			Reply reply = new Reply();
			reply.setUser(user);
			reply.setReply(replySubject);
			Comment comment = commentRepo.findByCommentId(Long.parseLong(commentId));
			replyRepo.save(reply);
			comment.addReply(reply);
			commentRepo.save(comment);
		} else if(replyType == ReplyType.reply) {
			User user = userRepo.findByUserId(Long.parseLong(userId));
			Reply reply = new Reply();
			reply.setUser(user);
			reply.setReply(replySubject);
//			Comment comment = commentRepo.findByCommentId(Long.parseLong(commentId));
			Reply parentReply = replyRepo.findByReplyId(Long.parseLong(commentId));
			replyRepo.save(reply);
			parentReply.addReplyToReply(reply);
			replyRepo.save(parentReply);
		}
	}

	@PostMapping("/get-replies")
	public ResponseEntity<?> getReplies(@RequestParam(name = "commentId") String commentId) {
		Comment comment = commentRepo.findByCommentId(Long.parseLong(commentId));
		return ResponseEntity.ok(comment);
	}
	
	@PostMapping("get-replyToReply")
	public ResponseEntity<?> getReplyToReply(@RequestParam(name = "replyId") String replyId) {
		Reply reply = replyRepo.findByReplyId(Long.parseLong(replyId));
		
		return ResponseEntity.ok(reply);
	}
}

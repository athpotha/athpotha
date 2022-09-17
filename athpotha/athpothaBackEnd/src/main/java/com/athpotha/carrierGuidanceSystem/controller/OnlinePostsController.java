package com.athpotha.carrierGuidanceSystem.controller;

import java.io.File;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.athpotha.carrierGuidanceSystem.model.AddPost;
import com.athpotha.carrierGuidanceSystem.model.Category;
import com.athpotha.carrierGuidanceSystem.model.OnlinePost;
import com.athpotha.carrierGuidanceSystem.model.OnlinePostType;
import com.athpotha.carrierGuidanceSystem.model.Post;
import com.athpotha.carrierGuidanceSystem.model.Question;
import com.athpotha.carrierGuidanceSystem.model.Student;
import com.athpotha.carrierGuidanceSystem.model.User;
import com.athpotha.carrierGuidanceSystem.model.UserInfo;
import com.athpotha.carrierGuidanceSystem.model.VoteType;
import com.athpotha.carrierGuidanceSystem.repository.CategoryRepository;
import com.athpotha.carrierGuidanceSystem.repository.OnlinePostRepository;
import com.athpotha.carrierGuidanceSystem.repository.PostRepository;
import com.athpotha.carrierGuidanceSystem.repository.QuestionRepository;
import com.athpotha.carrierGuidanceSystem.repository.StudentRepository;
import com.athpotha.carrierGuidanceSystem.repository.UserRepository;
import com.athpotha.carrierGuidanceSystem.service.FileUploadService;

@RestController
@RequestMapping("api/v1/post")
@CrossOrigin
public class OnlinePostsController {
//	@Autowired
//	private OnlinePostRepository onlinePostRepo;

	@Autowired
	private PostRepository postRepo;

	@Autowired
	private QuestionRepository questionRepo;

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private OnlinePostRepository onlinePostRepo;

	@Autowired
	private CategoryRepository categoryRepo;

	@PostMapping("/add-post")
	public ResponseEntity<?> addPost(@RequestParam(name = "imageFile", required = false) String filePath,
			@RequestParam("email") String email, @RequestParam("type") OnlinePostType type,
			@RequestParam("content") String title, @RequestParam("postCategory") String postCategory)
			throws IllegalStateException, IOException {
		User user = userRepo.findByEmailIgnoreCase(email);
		Category category = categoryRepo.findByCategoryId(Long.parseLong(postCategory));
		System.out.println(postCategory);
		if (type == OnlinePostType.post) {

			Post newPost = new Post();

			if (filePath != "") {
				newPost.setImage(filePath);
			}

			newPost.setUser(user);
			newPost.setTitle(title);
			newPost.setType(type);
			newPost.setCategory(category);

			postRepo.save(newPost);
			return ResponseEntity.ok("POST_ADDED_SUCCESS");
		} else if (type == OnlinePostType.question) {
			Question newQuestion = new Question();

			newQuestion.setUser(user);
			newQuestion.setQuestion(title);
			newQuestion.setType(type);
			newQuestion.setCategory(category);
			questionRepo.save(newQuestion);
			return ResponseEntity.ok("QUESTION_ADDED_SUCCESS");
		}
		return null;
	}

	@PostMapping("/get-own-posts")
	public List<OnlinePost> getOwnPosts(@RequestBody UserInfo userInfo) {
		System.out.println(userInfo.getUserId());

//		ArrayList<OnlinePost> onlinePosts = onlinePostRepo.findById(userInfo.getUserId());
		User user = userRepo.findByEmailIgnoreCase(userInfo.getEmail());
		List<OnlinePost> onlinePosts = onlinePostRepo.findAllByUserOrderByPostIdDesc(user);

		printData(onlinePosts);
		return onlinePosts;

	}

	@PutMapping("/vote-post")
	public void upVotePosts(@RequestParam("email") String email, @RequestParam("postId") String postId,
			VoteType voteType) {
		User user = userRepo.findByEmailIgnoreCase(email);
		OnlinePost onlinePost = onlinePostRepo.findByPostId(Long.parseLong(postId));

		if (voteType == VoteType.upvote) {
			if (onlinePost.getDownvotedUsers().contains(user)) {
				onlinePost.getDownvotedUsers().remove(user);
				onlinePost.setDownVotes(onlinePost.getDownVotes() - 1);
				onlinePost.addUpvote(user);
				onlinePost.setUpVotes(onlinePost.getUpVotes() + 1);
				onlinePostRepo.save(onlinePost);
			} else if (!onlinePost.getUpvotedUsers().contains(user)) {
				onlinePost.addUpvote(user);
				onlinePost.setUpVotes(onlinePost.getUpVotes() + 1);
				onlinePostRepo.save(onlinePost);
			} else {
				onlinePost.getUpvotedUsers().remove(user);
				onlinePost.setUpVotes(onlinePost.getUpVotes() - 1);
				onlinePostRepo.save(onlinePost);
			}
		} else if (voteType == VoteType.downvote) {
			if (onlinePost.getUpvotedUsers().contains(user)) {
				onlinePost.getUpvotedUsers().remove(user);
				onlinePost.setUpVotes(onlinePost.getUpVotes() - 1);
				onlinePost.addDownvote(user);
				onlinePost.setDownVotes(onlinePost.getDownVotes() + 1);
				onlinePostRepo.save(onlinePost);
			} else if (!onlinePost.getDownvotedUsers().contains(user)) {
				onlinePost.addDownvote(user);
				onlinePost.setDownVotes(onlinePost.getDownVotes() + 1);
				onlinePostRepo.save(onlinePost);
			} else {
				onlinePost.getDownvotedUsers().remove(user);
				onlinePost.setDownVotes(onlinePost.getDownVotes() - 1);
				onlinePostRepo.save(onlinePost);
			}
		}

	}

	@PostMapping("/is-user-voted")
	public boolean isUserUpvoted(@RequestParam("email") String email, @RequestParam("postId") String postId,
			@RequestParam("voteType") VoteType voteType) {
		System.out.println(voteType);
		User user = userRepo.findByEmailIgnoreCase(email);
		OnlinePost onlinePost = onlinePostRepo.findByPostId(Long.parseLong(postId));
		if (voteType == VoteType.upvote) {
			return onlinePost.getUpvotedUsers().contains(user);
		} else {
			return onlinePost.getDownvotedUsers().contains(user);
		}

	}

	public void printData(List<OnlinePost> posts) {
		for (int i = 0; i < posts.size(); i++) {
			System.out.println(posts.get(i).getAddedTime());
		}
	}
}

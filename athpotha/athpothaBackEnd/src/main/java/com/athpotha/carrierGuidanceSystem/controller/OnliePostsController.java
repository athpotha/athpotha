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
public class OnliePostsController {
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

		System.out.println(postCategory);
		if (type == OnlinePostType.post) {

			Post newPost = new Post();
			Category category = categoryRepo.findByCategoryId(Long.parseLong(postCategory));
			if (filePath != "") {
				newPost.setImage(filePath);
			}

			newPost.setUser(user);
			newPost.setTitle(title);
			newPost.setType(type);

			category.addPost(newPost);
			postRepo.save(newPost);
			return ResponseEntity.ok("POST_ADDED_SUCCESS");
		} else if (type == OnlinePostType.question) {
			Question newQuestion = new Question();
			Category category = categoryRepo.findByCategoryId(Long.parseLong(postCategory));
			newQuestion.setUser(user);
			newQuestion.setQuestion(title);
			newQuestion.setType(type);
			category.addQuestion(newQuestion);
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

	public void printData(List<OnlinePost> posts) {
		for (int i = 0; i < posts.size(); i++) {
			System.out.println(posts.get(i).getAddedTime());
		}
	}
}

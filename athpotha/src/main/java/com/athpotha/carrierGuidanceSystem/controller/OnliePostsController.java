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
import com.athpotha.carrierGuidanceSystem.model.OnlinePost;
import com.athpotha.carrierGuidanceSystem.model.OnlinePostType;
import com.athpotha.carrierGuidanceSystem.model.Post;
import com.athpotha.carrierGuidanceSystem.model.Question;
import com.athpotha.carrierGuidanceSystem.model.Student;
import com.athpotha.carrierGuidanceSystem.model.User;
import com.athpotha.carrierGuidanceSystem.model.UserInfo;
import com.athpotha.carrierGuidanceSystem.repository.OnlinePostRepository;
import com.athpotha.carrierGuidanceSystem.repository.PostRepository;
import com.athpotha.carrierGuidanceSystem.repository.QuestionRepository;
import com.athpotha.carrierGuidanceSystem.repository.StudentRepository;
import com.athpotha.carrierGuidanceSystem.repository.UserRepository;

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

	private static String imageDirectory = "./";

	@PostMapping("/add-post")
	public ResponseEntity<?> addPost(@RequestParam("imageFile") MultipartFile file, @RequestParam("email") String email,
			@RequestParam("type") String type, @RequestParam("content") String content) {
		User user = userRepo.findByEmailIgnoreCase(email);
		File tempDirectory = new File(System.getProperty("java.io.tmpdir"));
		System.out.println(tempDirectory);
//		makeDirectoryIfNotExist(imageDirectory);
//		Path fileNamePath = Paths.get(imageDirectory,file.getOriginalFilename());
//		System.out.println(file.getOriginalFilename());
//
//		try {
//            Files.write(fileNamePath, file.getBytes());
//            return new ResponseEntity<>(HttpStatus.CREATED);
//        } catch (IOException ex) {
//            return new ResponseEntity<>("Image is not uploaded", HttpStatus.BAD_REQUEST);
//        }
//		if(post.getType() == OnlinePostType.post) {
//			Post newPost = new Post();
//			newPost.setUser(user);
//			newPost.setTitle(post.getTitle());
//			newPost.setType(post.getType());
//			postRepo.save(newPost);
//		} else if(post.getType() == OnlinePostType.question) {
//			System.out.println("hello");
//			Question newQuestion = new Question();
//			newQuestion.setUser(user);
//			newQuestion.setQuestion(post.getTitle());
//			newQuestion.setType(post.getType());
//			questionRepo.save(newQuestion);
//		}

		return null;
	}
	
	private void makeDirectoryIfNotExist(String imageDirectory) {
        File directory = new File(imageDirectory);
        if (!directory.exists()) {
            directory.mkdir();
        }
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

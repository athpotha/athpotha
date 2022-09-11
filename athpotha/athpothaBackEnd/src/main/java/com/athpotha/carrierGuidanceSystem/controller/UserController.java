package com.athpotha.carrierGuidanceSystem.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.athpotha.carrierGuidanceSystem.model.ImageType;
import com.athpotha.carrierGuidanceSystem.model.User;
import com.athpotha.carrierGuidanceSystem.repository.UserRepository;
import com.athpotha.carrierGuidanceSystem.service.FileUploadService;

@RestController()
@RequestMapping("api/v1/logged-user")
@CrossOrigin
public class UserController {

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private FileUploadService fileUploadService;
	
	private static String imageDirectory = System.getProperty("user.dir") + "/src/athpothaFrontEnd/public/images/profile";

	@PutMapping("/change-profileImage")
	public ResponseEntity<?> ChangeProfileImage(@RequestParam("imagePath") String filePath, @RequestParam("email") String email, @RequestParam("imageType") ImageType imageType) throws IllegalStateException, IOException {
		User user = userRepo.findByEmailIgnoreCase(email);

		if(imageType == ImageType.PROFILE_PIC) {
			user.setProfilePicture(filePath);
		} else if(imageType == ImageType.COVER_PIC) {
			user.setCoverPicture(filePath);
		}
		userRepo.save(user);
		
		user = userRepo.findByEmailIgnoreCase(email);
		if(imageType == ImageType.PROFILE_PIC) {
			return ResponseEntity.ok(user.getProfilePicture());
		} else if(imageType == ImageType.COVER_PIC) {
			return ResponseEntity.ok(user.getCoverPicture());
		}
		return null;
	}
	
	@PostMapping("/get-users")
	public List<User> getAllUsers() {
		return userRepo.findAll();
	}
	
	@PostMapping("/get-user")
	public User getUser(@RequestBody User user) {
		return userRepo.findByUserId(user.getUserId());
	}
	
	@PostMapping("/search-user")
	public ResponseEntity<?> searchUser(@RequestParam("searchName") String searchName) {
		System.out.println(searchName);
		List<User> searchedUsers = userRepo.findByUserName(searchName);
		return ResponseEntity.ok(searchedUsers);
	}
}

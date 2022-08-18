package com.athpotha.carrierGuidanceSystem.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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
	
	private static String imageDirectory = System.getProperty("user.dir") + "/src/athpothaFrontEnd/public/images/profileImages";

	@PutMapping("/change-profileImage")
	public ResponseEntity<?> ChangeProfileImage(@RequestParam("imageFile") MultipartFile file, @RequestParam("email") String email) throws IllegalStateException, IOException {
		User user = userRepo.findByEmailIgnoreCase(email);

		fileUploadService.makeDirectoryIfNotExist(imageDirectory);
		String newProfileImage = user.getFirst_name() + "-" + user.getLast_name() + "-" + "profile-" + String.valueOf(user.getUser_id());
		String imageExtention = fileUploadService.generateFile(file, newProfileImage, imageDirectory);

		String filePath = "/images/profileImages/" + newProfileImage + "." + imageExtention;
		System.out.println(filePath);
		System.out.println(imageDirectory);
		user.setProfile_picture(filePath);
		userRepo.save(user);
		
		user = userRepo.findByEmailIgnoreCase(email);
		return ResponseEntity.ok(user.getProfile_picture());
	}
}

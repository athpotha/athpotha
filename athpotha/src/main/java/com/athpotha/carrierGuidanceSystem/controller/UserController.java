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
	public ResponseEntity<?> ChangeProfileImage(@RequestParam("imageFile") MultipartFile file, @RequestParam("email") String email, @RequestParam("imageType") ImageType imageType) throws IllegalStateException, IOException {
		User user = userRepo.findByEmailIgnoreCase(email);

		fileUploadService.makeDirectoryIfNotExist(imageDirectory);
		String newProfileImage = user.getFirst_name() + "-" + user.getLast_name() + "-" + imageType + "-" + String.valueOf(user.getUser_id());
		String imageExtention = fileUploadService.generateFile(file, newProfileImage, imageDirectory);

		String filePath = "/images/profile/" + newProfileImage + "." + imageExtention;

		if(imageType == ImageType.PROFILE_PIC) {
			user.setProfile_picture(filePath);
		} else if(imageType == ImageType.COVER_PIC) {
			user.setCover_picture(filePath);
		}
		userRepo.save(user);
		
		user = userRepo.findByEmailIgnoreCase(email);
		if(imageType == ImageType.PROFILE_PIC) {
			return ResponseEntity.ok(user.getProfile_picture());
		} else if(imageType == ImageType.COVER_PIC) {
			return ResponseEntity.ok(user.getCover_picture());
		}
		return null;
	}
}

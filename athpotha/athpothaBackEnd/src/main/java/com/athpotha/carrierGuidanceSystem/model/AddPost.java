package com.athpotha.carrierGuidanceSystem.model;

import org.springframework.web.multipart.MultipartFile;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AddPost {
	private String title;
	private String email;
	private OnlinePostType type;
	private MultipartFile image;
}

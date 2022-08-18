package com.athpotha.carrierGuidanceSystem.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FileUploadService {
	public void uploadFile(MultipartFile file, String filePath) throws IllegalStateException, IOException {
		file.transferTo(new File(filePath));
	}

	public void makeDirectoryIfNotExist(String fileDirectory) {
		File directory = new File(fileDirectory);
		if (!directory.exists()) {
			directory.mkdir();
		}
	}
	
	public String generateFile(MultipartFile file, String newFileName, String fileDirectory) throws IllegalStateException, IOException {
		File newFile = new File(file.getOriginalFilename());
		String fileName = newFile.toString();

		String extension = "";
//		String NewImageName = "post-" + String.valueOf(topPost.getPostId());
		int index = fileName.lastIndexOf('.');
		if (index > 0) {
			extension = fileName.substring(index + 1);
			System.out.println("File extension is " + extension);
		}
		
		Path fileNamePath = Paths.get(fileDirectory,
				newFileName.concat(".").concat(extension));
		uploadFile(file, String.valueOf(fileNamePath));
		
		return extension;
//		System.out.println(String.valueOf(fileNamePath));
	}
}

package com.athpotha.carrierGuidanceSystem.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.athpotha.carrierGuidanceSystem.model.Category;
import com.athpotha.carrierGuidanceSystem.model.Student;
import com.athpotha.carrierGuidanceSystem.model.StudentType;
import com.athpotha.carrierGuidanceSystem.model.User;
import com.athpotha.carrierGuidanceSystem.model.UserType;
import com.athpotha.carrierGuidanceSystem.repository.CategoryRepository;
import com.athpotha.carrierGuidanceSystem.repository.StudentRepository;
import com.athpotha.carrierGuidanceSystem.repository.UserRepository;
import com.athpotha.carrierGuidanceSystem.requests.CategoryRequest;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/category")
public class CategoryController {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private CategoryRepository categoryRepository;

	@Autowired
	private StudentRepository studentRepository;

	@PutMapping("/add-categories")
	public ResponseEntity<?> addCategory(@RequestBody CategoryRequest categoryRequest) {
		User user = userRepository.findByEmailIgnoreCase(categoryRequest.getEmail());
		ArrayList<Category> categories = new ArrayList<>();
		for (int i = 0; i < categoryRequest.getCategories().length; i++) {
			Category category = categoryRepository.findByCategoryId(Long.parseLong(categoryRequest.getCategories()[i]));
			categories.add(category);
		}

		if (user.getUser_type() == UserType.student) {
			Student student = studentRepository.findByEmailIgnoreCase(categoryRequest.getEmail());
			student.setStudentType(categoryRequest.getStudentType());
			studentRepository.save(student);
			for (Category category : categories) {
				category.getStudents().add(student);
				categoryRepository.save(category);
			}
			student.setHasLogged(true);
			studentRepository.save(student);
		}

//		categoryRepository.save();
		return ResponseEntity.ok("ADDED_SUCCESS");
	}

	@PostMapping("/get-categories")
	public List<Category> getCategories() {
		return categoryRepository.findAll();
	}
}

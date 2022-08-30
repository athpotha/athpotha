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
import com.athpotha.carrierGuidanceSystem.model.Community;
import com.athpotha.carrierGuidanceSystem.model.Student;
import com.athpotha.carrierGuidanceSystem.model.StudentType;
import com.athpotha.carrierGuidanceSystem.model.Tutor;
import com.athpotha.carrierGuidanceSystem.model.User;
import com.athpotha.carrierGuidanceSystem.model.UserType;
import com.athpotha.carrierGuidanceSystem.repository.CategoryRepository;
import com.athpotha.carrierGuidanceSystem.repository.CommiunityRepository;
import com.athpotha.carrierGuidanceSystem.repository.StudentRepository;
import com.athpotha.carrierGuidanceSystem.repository.TutorRepository;
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
	
	@Autowired
	private TutorRepository tutorRepository;
	
	@Autowired
	private CommiunityRepository communityRepository;

	@PutMapping("/add-categories")
	public ResponseEntity<?> addCategory(@RequestBody CategoryRequest categoryRequest) {
		User user = userRepository.findByEmailIgnoreCase(categoryRequest.getEmail());
		ArrayList<Category> categories = new ArrayList<>();
		for (int i = 0; i < categoryRequest.getCategories().length; i++) {
			Category category = categoryRepository.findByCategoryId(Long.parseLong(categoryRequest.getCategories()[i]));
			categories.add(category);
		}

		if (user.getUserType() == UserType.student) {
			Student student = studentRepository.findByEmailIgnoreCase(categoryRequest.getEmail());
			student.setStudentType(categoryRequest.getStudentType());
			studentRepository.save(student);
			for (Category category : categories) {
				category.getStudents().add(student);
				categoryRepository.save(category);
			}
			student.setHasLogged(true);
			studentRepository.save(student);
		} else if(user.getUserType() == UserType.tutor) {
			Tutor tutor = tutorRepository.findByEmailIgnoreCase(categoryRequest.getEmail());
			for (Category category : categories) {
				category.getTutors().add(tutor);
				categoryRepository.save(category);
			}
			tutor.setHasLogged(true);
			tutorRepository.save(tutor);
		} else if(user.getUserType() == UserType.community) {
			Community community = communityRepository.findByEmailIgnoreCase(categoryRequest.getEmail());
			for (Category category : categories) {
				category.getCommunities().add(community);
				categoryRepository.save(category);
			}
			community.setHasLogged(true);
			communityRepository.save(community);
		}

		System.out.println(user.getUserType());
//		categoryRepository.save();
		return ResponseEntity.ok("ADDED_SUCCESS");
	}

	@PostMapping("/get-categories")
	public List<Category> getCategories() {
		return categoryRepository.findAll();
	}
	
	@PostMapping("/get-my-category")
	public List<Category> getStudentCategory(@RequestBody User user) {
		Student student = new Student();
		Community community = new Community();
		Tutor tutor = new Tutor();
		System.out.println(user.getUserType());
		if(user.getUserType() == UserType.student) {
			student = studentRepository.findByEmailIgnoreCase(user.getEmail());
			return categoryRepository.findByStudents(student);
		} else if(user.getUserType() == UserType.community) {
			community = communityRepository.findByEmailIgnoreCase(user.getEmail());
			return categoryRepository.findByCommunities(community);
		} else if(user.getUserType() == UserType.tutor) {
			tutor = tutorRepository.findByEmailIgnoreCase(user.getEmail());
			return categoryRepository.findByTutors(tutor);
		}
		
		return null;
	}
}

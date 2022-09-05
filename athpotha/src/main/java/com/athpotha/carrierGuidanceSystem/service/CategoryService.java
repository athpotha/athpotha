package com.athpotha.carrierGuidanceSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.athpotha.carrierGuidanceSystem.model.Category;
import com.athpotha.carrierGuidanceSystem.model.Community;
import com.athpotha.carrierGuidanceSystem.model.Student;
import com.athpotha.carrierGuidanceSystem.model.Tutor;
import com.athpotha.carrierGuidanceSystem.model.User;
import com.athpotha.carrierGuidanceSystem.model.UserType;
import com.athpotha.carrierGuidanceSystem.repository.CategoryRepository;
import com.athpotha.carrierGuidanceSystem.repository.CommiunityRepository;
import com.athpotha.carrierGuidanceSystem.repository.StudentRepository;
import com.athpotha.carrierGuidanceSystem.repository.TutorRepository;

@Service
public class CategoryService {
	@Autowired
	private StudentRepository studentRepository;
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	@Autowired
	private CommiunityRepository commiunityRepository;
	
	@Autowired
	private TutorRepository tutorRepository;
	
	public List<Category> getUserCategory(@RequestBody User user) {
		Student student = new Student();
		Community community = new Community();
		Tutor tutor = new Tutor();
		System.out.println(user.getUserType());
		if(user.getUserType() == UserType.student) {
			student = studentRepository.findByEmailIgnoreCase(user.getEmail());
			return categoryRepository.findByStudents(student);
		} else if(user.getUserType() == UserType.community) {
			community = commiunityRepository.findByEmailIgnoreCase(user.getEmail());
			return categoryRepository.findByCommunities(community);
		} else if(user.getUserType() == UserType.tutor) {
			tutor = tutorRepository.findByEmailIgnoreCase(user.getEmail());
			return categoryRepository.findByTutors(tutor);
		}
		
		return null;
	}
}

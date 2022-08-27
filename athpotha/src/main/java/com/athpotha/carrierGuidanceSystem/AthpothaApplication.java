package com.athpotha.carrierGuidanceSystem;

import javax.annotation.PostConstruct;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.athpotha.carrierGuidanceSystem.model.Admin;
import com.athpotha.carrierGuidanceSystem.model.Category;
import com.athpotha.carrierGuidanceSystem.model.Community;
import com.athpotha.carrierGuidanceSystem.model.Student;
import com.athpotha.carrierGuidanceSystem.model.StudentType;
import com.athpotha.carrierGuidanceSystem.model.Tutor;
import com.athpotha.carrierGuidanceSystem.model.University;
import com.athpotha.carrierGuidanceSystem.model.User;
import com.athpotha.carrierGuidanceSystem.model.UserType;
import com.athpotha.carrierGuidanceSystem.repository.AdminRepository;
import com.athpotha.carrierGuidanceSystem.repository.CategoryRepository;
import com.athpotha.carrierGuidanceSystem.repository.CommiunityRepository;
import com.athpotha.carrierGuidanceSystem.repository.StudentRepository;
import com.athpotha.carrierGuidanceSystem.repository.TutorRepository;
import com.athpotha.carrierGuidanceSystem.repository.UniversityRepository;
import com.athpotha.carrierGuidanceSystem.repository.UserRepository;

@SpringBootApplication
public class AthpothaApplication {
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private AdminRepository adminRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private CommiunityRepository commiunityRepository;
	
	@Autowired
	private StudentRepository studentRepository;
	
	@Autowired
	private TutorRepository tutorRepository;
	
	@Autowired
	private UniversityRepository universityRepository;
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(AthpothaApplication.class, args);
	}
	
	@PostConstruct
	protected void init() {
		Admin admin = new Admin();
		Student student = new Student();
		Community community = new Community();
		Tutor tutor = new Tutor();
		University university = new University();
		
		if(!isExistingUser("athpothaAdmin121@gmail.com")) {
			admin.setFirst_name("Athpotha");
			admin.setLast_name("Admin");
			admin.setUser_type(UserType.admin);
			admin.setEmail("athpothaAdmin121@gmail.com");
			admin.setPassword(passwordEncoder.encode("Athpotha@123"));
			admin.setVerified(true);
			admin.setEnabled(true);
			adminRepository.save(admin);
		}
		if(!isExistingUser("athpothaStudent121@gmail.com")) {
			student.setFirst_name("Hiruni");
			student.setLast_name("Maleesha");
			student.setUser_type(UserType.student);
			student.setEmail("athpothaStudent121@gmail.com");
			student.setPassword(passwordEncoder.encode("Athpotha@123"));
			student.setVerified(true);
			student.setEnabled(true);
			studentRepository.save(student);
		}
		if(!isExistingUser("athpothaCommunity121@gmail.com")) {
			community.setFirst_name("Dilsha");
			community.setLast_name("Navodi");
			community.setUser_type(UserType.community);
			community.setEmail("athpothaCommunity121@gmail.com");
			community.setPassword(passwordEncoder.encode("Athpotha@123"));
			community.setVerified(true);
			community.setEnabled(true);
			commiunityRepository.save(community);
		}
		if(!isExistingUser("athpothaTutor121@gmail.com")) {
			tutor.setFirst_name("Maduni");
			tutor.setLast_name("Tharushi");
			tutor.setUser_type(UserType.tutor);
			tutor.setEmail("athpothaTutor121@gmail.com");
			tutor.setPassword(passwordEncoder.encode("Athpotha@123"));
			tutor.setVerified(true);
			tutor.setEnabled(true);
			tutorRepository.save(tutor);
		}
		if(!isExistingUser("athpothaUniversity121@gmail.com")) {
			university.setFirst_name("University");
			university.setLast_name("Of Colombo");
			university.setUser_type(UserType.university);
			university.setEmail("athpothaUniversity121@gmail.com");
			university.setPassword(passwordEncoder.encode("Athpotha@123"));
			university.setVerified(true);
			university.setEnabled(true);
			universityRepository.save(university);
		}
		
		//Add Category
//		categoryRepository.save(new Category("Maths", StudentType.Regular));
//		categoryRepository.save(new Category("Science", StudentType.Regular));
		
//		categoryRepository.save(new Category("Combined Maths", StudentType.OL_Qualified));
//		categoryRepository.save(new Category("Chemisty", StudentType.OL_Qualified));
//		categoryRepository.save(new Category("Physics", StudentType.OL_Qualified));
//		
//		categoryRepository.save(new Category("Engineering", StudentType.AL_Qualified));
//		categoryRepository.save(new Category("Information Technology", StudentType.AL_Qualified));
//		categoryRepository.save(new Category("Science", StudentType.AL_Qualified));
//		
//		categoryRepository.save(new Category("Engineering", StudentType.Undergraduate));
//		categoryRepository.save(new Category("Software & Data Science", StudentType.Undergraduate));
//		categoryRepository.save(new Category("Scientist", StudentType.Undergraduate));
	}
	
	private boolean isExistingUser(String email) {

		User existingAdmin = userRepository.findByEmailIgnoreCase(email);
		if(existingAdmin != null) {
			return true;
		} else {
			return false;
		}
	}
	
//	private boolean isExitingCategory(String category) {
//		Category existingCategory = categoryRepository.findByCategoryName(category);
//		if(existingCategory != null) {
//			return true;
//		} else {
//			return false;
//		}
//	}
}

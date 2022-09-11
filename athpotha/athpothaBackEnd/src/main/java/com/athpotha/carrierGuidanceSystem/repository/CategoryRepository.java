package com.athpotha.carrierGuidanceSystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.athpotha.carrierGuidanceSystem.model.Category;
import com.athpotha.carrierGuidanceSystem.model.Community;
import com.athpotha.carrierGuidanceSystem.model.Student;
import com.athpotha.carrierGuidanceSystem.model.StudentType;
import com.athpotha.carrierGuidanceSystem.model.Tutor;

public interface CategoryRepository extends JpaRepository<Category, Long> {
	Category findByCategoryId(Long categoryId);
	List<Category> findByStudents(Student student);
	List<Category> findByTutors(Tutor tutor);
	List<Category> findByCommunities(Community community);
}

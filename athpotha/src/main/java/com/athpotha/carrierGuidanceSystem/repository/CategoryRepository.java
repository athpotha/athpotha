package com.athpotha.carrierGuidanceSystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.athpotha.carrierGuidanceSystem.model.Category;
import com.athpotha.carrierGuidanceSystem.model.Student;
import com.athpotha.carrierGuidanceSystem.model.StudentType;

public interface CategoryRepository extends JpaRepository<Category, Long> {
	Category findByCategoryId(Long categoryId);
//	List<Category> findByStudents(List<Student> students);
}

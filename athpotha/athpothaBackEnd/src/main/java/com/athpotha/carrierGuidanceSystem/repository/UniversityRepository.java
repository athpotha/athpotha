package com.athpotha.carrierGuidanceSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.athpotha.carrierGuidanceSystem.model.University;
import com.athpotha.carrierGuidanceSystem.model.User;

public interface UniversityRepository extends JpaRepository<University, Long> {
	University findByEmailIgnoreCase(String email);
}

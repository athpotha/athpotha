package com.athpotha.carrierGuidanceSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.athpotha.carrierGuidanceSystem.model.Commiunity;
import com.athpotha.carrierGuidanceSystem.model.Student;
import com.athpotha.carrierGuidanceSystem.model.User;

@Repository
public interface CommiunityRepository extends JpaRepository<User, Long> {
	Commiunity findByEmailIgnoreCase(String email);
}

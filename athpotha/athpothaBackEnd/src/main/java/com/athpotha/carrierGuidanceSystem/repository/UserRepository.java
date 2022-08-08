package com.athpotha.carrierGuidanceSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
//import org.springframework.stereotype.Repository;

import com.athpotha.carrierGuidanceSystem.model.User;

@NoRepositoryBean
public interface UserRepository extends JpaRepository<User, Long> {
	User findByEmailIgnoreCase(String email);
}

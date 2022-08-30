package com.athpotha.carrierGuidanceSystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Repository;

import com.athpotha.carrierGuidanceSystem.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	User findByEmailIgnoreCase(String email);
	User findByUserId(Long userId);
	List<User> findByFollow(User following);
//	findByUser(User user);
//	User findByFirst_name(String first_name);
}

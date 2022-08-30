package com.athpotha.carrierGuidanceSystem.repository;
import com.athpotha.carrierGuidanceSystem.model.UserType;
import org.springframework.data.jpa.repository.JpaRepository;

import com.athpotha.carrierGuidanceSystem.model.University;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UniversityRepository extends JpaRepository<University, Long> {
	University findByEmailIgnoreCase(String email);

	@Query("select u from University u where u not in (Select u from University u join u.followings a where a.following_id in (:id)) and u.userType in (:role)")
	List<University> findUniversitiesunFollowing(Long id,UserType role);
}

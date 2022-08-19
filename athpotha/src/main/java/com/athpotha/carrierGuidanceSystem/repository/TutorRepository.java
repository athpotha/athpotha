package com.athpotha.carrierGuidanceSystem.repository;

import com.athpotha.carrierGuidanceSystem.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TutorRepository extends JpaRepository<Tutor, Long> {
	Tutor findByEmailIgnoreCase(String email);

	@Query("select t from Tutor t where t not in (Select t from Tutor t join t.followings a where a.following_id in (:id))")
	List<Tutor> findTutorsunFollowing(Long id);

}
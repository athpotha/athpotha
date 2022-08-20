package com.athpotha.carrierGuidanceSystem.repository;

import com.athpotha.carrierGuidanceSystem.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommiunityRepository extends JpaRepository<Commiunity, Long> {
	Commiunity findByEmailIgnoreCase(String email);

	@Query("select t from Commiunity t where t not in (Select t from Commiunity t join t.followings a where a.following_id in (:id)) and t.user_type in (:role)")
	List<Commiunity> findCommunitiesunFollowing(Long id, UserType role);
}

package com.athpotha.carrierGuidanceSystem.repository;

import com.athpotha.carrierGuidanceSystem.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommiunityRepository extends JpaRepository<Community, Long> {
	Community findByEmailIgnoreCase(String email);

	@Query("select t from Community t where t not in (Select t from Community t join t.followings a where a.following_id in (:id)) and t.userType in (:role)")
	List<Community> findCommunitiesunFollowing(Long id, UserType role);
}

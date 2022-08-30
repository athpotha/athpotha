package com.athpotha.carrierGuidanceSystem.repository;

import com.athpotha.carrierGuidanceSystem.model.Tutor;
import com.athpotha.carrierGuidanceSystem.model.UserType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.athpotha.carrierGuidanceSystem.model.Student;

import java.util.List;


@Repository
public interface StudentRepository extends JpaRepository<Student, Long>{
	Student findByEmailIgnoreCase(String email);

	@Query("select t from Student t where t not in (Select t from Student t join t.followings a where a.following_id in (:id)) and t.userType in (:role) and t.userId not in (:id)")
	List<Student> findStudentssunFollowing(Long id, UserType role);
}



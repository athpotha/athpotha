package com.athpotha.carrierGuidanceSystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Repository;

import com.athpotha.carrierGuidanceSystem.model.OnlinePost;
import com.athpotha.carrierGuidanceSystem.model.Student;

@Repository
public interface OnlinePostRepository extends JpaRepository<OnlinePost, Long> {

	List<OnlinePost> findAllByStudent(Student student);
}

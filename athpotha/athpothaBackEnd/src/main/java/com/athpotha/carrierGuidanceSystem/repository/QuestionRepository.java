package com.athpotha.carrierGuidanceSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.athpotha.carrierGuidanceSystem.model.Post;
import com.athpotha.carrierGuidanceSystem.model.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
	Question findByPostId(Long postId);
	void deleteByPostId(Long postId);
}

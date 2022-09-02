package com.athpotha.carrierGuidanceSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.athpotha.carrierGuidanceSystem.model.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
	Comment findByCommentId(Long commentId);
}

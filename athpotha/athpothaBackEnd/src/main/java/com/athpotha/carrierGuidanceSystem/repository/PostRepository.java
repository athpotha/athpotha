package com.athpotha.carrierGuidanceSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.athpotha.carrierGuidanceSystem.model.OnlinePost;
import com.athpotha.carrierGuidanceSystem.model.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
	Post findByPostId(Long postId);
	void deleteByPostId(Long postId);
}

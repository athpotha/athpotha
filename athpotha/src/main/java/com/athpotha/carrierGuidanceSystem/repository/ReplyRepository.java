package com.athpotha.carrierGuidanceSystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.athpotha.carrierGuidanceSystem.model.Reply;

@Repository
public interface ReplyRepository extends JpaRepository<Reply, Long> {
	Reply findByReplyId(Long replyId);
	List<Reply> findByReplies(Reply reply);
}

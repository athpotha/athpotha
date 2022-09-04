package com.athpotha.carrierGuidanceSystem.model;

public interface UserFeeds {
	Long getPost_id();
	String getAdded_time();
	Long getDown_votes();
	Long getNumber_of_comments();
	OnlinePostType getType();
	Long getUp_votes();
	Long getUser_id();
	Long getCategory_id();
//	private Long postId;
//	private String addedTime;
//	private Long downVotes;
//	private Long numberOfComments;
//	private OnlinePostType type;
//	private Long upVotes;
//	private Long userId;
//	private Long categoryId;
}

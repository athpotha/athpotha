package com.athpotha.carrierGuidanceSystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Repository;

import com.athpotha.carrierGuidanceSystem.model.OnlinePost;
import com.athpotha.carrierGuidanceSystem.model.Student;
import com.athpotha.carrierGuidanceSystem.model.User;

@Repository
public interface OnlinePostRepository extends JpaRepository<OnlinePost, Long> {

	List<OnlinePost> findAllByUserOrderByPostIdDesc(User user);
	OnlinePost findTopByOrderByPostIdDesc();
	OnlinePost findByPostId(Long postId);
	
//	@Query(value = "SELECT * FROM online_post WHERE user_id=:userId OR category_id = :categoryId", nativeQuery = true)
//	List<OnlinePost> getUserFeeds(Long userId, Long CategoryId);
	@Query(value = "SELECT op FROM OnlinePost op WHERE op.user IN(SELECT u.following FROM User u WHERE u.userId=:userId)")
//	@Query(value = "SELECT op FROM OnlinePost op WHERE op.postId NOT IN(SELECT user FROM op WHERE user.userId IN(SELECT following FROM user WHERE following.userId=3))")
	List<OnlinePost> getUserFollowingFeeds(Long userId);
	
	@Query(value = "SELECT op.users FROM OnlinePost op WHERE op.postId<>:postId")
	List<OnlinePost> getUnSeenPosts(Long postId);
//	@Query(value = "SELECT u.following FROM User u WHERE u.userId=:userId")
//	List<User> getFollowing(Long userId);
}

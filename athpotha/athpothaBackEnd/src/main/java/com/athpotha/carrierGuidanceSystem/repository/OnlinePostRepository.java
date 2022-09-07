package com.athpotha.carrierGuidanceSystem.repository;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Repository;

import com.athpotha.carrierGuidanceSystem.model.Category;
import com.athpotha.carrierGuidanceSystem.model.OnlinePost;
import com.athpotha.carrierGuidanceSystem.model.Student;
import com.athpotha.carrierGuidanceSystem.model.User;
import com.athpotha.carrierGuidanceSystem.model.UserFeeds;
import com.athpotha.carrierGuidanceSystem.model.UserFeeds;

@Repository
public interface OnlinePostRepository extends JpaRepository<OnlinePost, Long> {

	List<OnlinePost> findAllByUserOrderByPostIdDesc(User user);
	OnlinePost findTopByOrderByPostIdDesc();
	OnlinePost findByPostId(Long postId);
//	List<OnliePost> findAllByCategoryOrderByPostIdDesc()
	
//	@Query(value = "SELECT * FROM online_post WHERE user_id=:userId OR category_id = :categoryId", nativeQuery = true)
//	List<OnlinePost> getUserFeeds(Long userId, Long CategoryId);
//	@Query(value = "SELECT * FROM online_post WHERE post_id NOT IN(SELECT post_id FROM user_view_post WHERE user_id IN(SELECT user_id FROM follow WHERE following_id=:userId))", nativeQuery = true)
//	@Query(value = "SELECT op FROM OnlinePost op WHERE op.postId NOT IN(SELECT user FROM op WHERE user.userId IN(SELECT following FROM user WHERE following.userId=3))")
	@Query(value="SELECT * FROM online_post WHERE user_id IN(SELECT user_id FROM follow WHERE following_id=:userId) ORDER BY post_id DESC ", nativeQuery=true)
	List<OnlinePost> getUserFollowingFeeds(Long userId);
	
	
	@Query(value = "SELECT op.users FROM OnlinePost op WHERE op.postId<>:postId")
	List<OnlinePost> getUnSeenPosts(Long postId);
//	@Query(value = "SELECT u.following FROM User u WHERE u.userId=:userId")
//	List<User> getFollowing(Long userId);
	
	List<OnlinePost> findAllByCategoryOrderByPostIdDesc(Category category);
}

package com.athpotha.carrierGuidanceSystem.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Repository;
import com.athpotha.carrierGuidanceSystem.model.UserType;
import com.athpotha.carrierGuidanceSystem.model.User;

import java.util.List;

@Repository
public interface
UserRepository extends JpaRepository<User, Long> {
	User findByEmailIgnoreCase(String email);
	User findByUserId(Long userId);


//    List<User> findAllByUserId(Long id);

	List<User> findByFollowing(User user);
//	@Query("select t from Student t where t not in (Select t from Student t join t.followings a where a.following_id in (:id)) and t.userType in (:role) and t.userId not in (:id)")
//	List<User> findStudentssunFollowing(Long id, UserType role);
//	findByUser(User user);

//	User findByFirst_name(String first_name);
	
	List<User> findByUserName(String userName);
	
	@Query("SELECT COUNT(user_id) AS tot_users FROM User")
	int getTotUsers();
	
	@Query(nativeQuery=true, value="SELECT COUNT(DISTINCT user_id) FROM User WHERE created_at > NOW() - INTERVAL 1 WEEK")
	int getNewUsers();
	
	List<User> findByUserDeletedFalse();
	List<User> findAllByUserDeletedFalseAndUserTypeNot(UserType userType);
	
	
}

package com.athpotha.carrierGuidanceSystem.model;

import java.util.List;

import java.util.Date;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "student")
public class Student extends User {
	@Enumerated(value = EnumType.STRING)
	private StudentType studentType;
	private String description;
//	@ManyToMany(cascade = CascadeType.ALL)
//	@JoinTable(
//			name = "user_education_category",
//			joinColumns = @JoinColumn(
//					name = "category_id",
//					referencedColumnName = "categoryId"
//			),
//			inverseJoinColumns = @JoinColumn(
//					name = "user_id",
//					referencedColumnName = "user_id"
//			)
//	)
//	private List<Category> educationCategories;
	public Student(String firstName, String lastName, UserType userType, String email, String password,
			String profilePicture, String coverPicture, boolean userDeleted, boolean enabled, boolean verified,
			Date created_at, boolean hasLogged, List<Follower> followers, List<Following> followings,
			StudentType studentType, String description) {
		super(firstName, lastName, userType, email, password, profilePicture, coverPicture, userDeleted, enabled,
				verified, created_at, hasLogged, followers, followings);
		this.studentType = studentType;
		this.description = description;
	}
	
	
}

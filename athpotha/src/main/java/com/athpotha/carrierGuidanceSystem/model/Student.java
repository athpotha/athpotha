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
	
	public Student(String first_name, String last_name, UserType user_type, String email, String password,
			String profile_picture, boolean userDeleted, boolean enabled, boolean verified, Date created_at,
			StudentType studentType) {
		super(first_name, last_name, user_type, email, password, profile_picture, userDeleted, enabled, verified,
				created_at);
		this.studentType = studentType;
	}
	
}

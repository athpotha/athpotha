package com.athpotha.carrierGuidanceSystem.model;

import java.util.Date;

import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Student extends User {
	private StudentType studentType;

	public Student(String first_name, String last_name, UserType user_type, String email, String password,
			String profile_picture, boolean userDeleted, boolean enabled, boolean verified, Date created_at,
			StudentType studentType) {
		super(first_name, last_name, user_type, email, password, profile_picture, userDeleted, enabled, verified,
				created_at);
		this.studentType = studentType;
	}
	
}

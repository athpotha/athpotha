package com.athpotha.carrierGuidanceSystem.model;

import java.util.List;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

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
	private StudentType studentType;

	public Student(String first_name, String last_name, UserType user_type, String email, String password,
			String profile_picture, boolean userDeleted, boolean enabled, boolean verified, Date created_at,
			StudentType studentType) {
		super(first_name, last_name, user_type, email, password, profile_picture, userDeleted, enabled, verified,
				created_at);
		this.studentType = studentType;
	}
	
}

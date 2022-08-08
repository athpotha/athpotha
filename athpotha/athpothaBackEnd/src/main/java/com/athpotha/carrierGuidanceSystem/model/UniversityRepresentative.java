package com.athpotha.carrierGuidanceSystem.model;

import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@Entity
public class UniversityRepresentative extends User {
	private String faculty;
	private String university;
}

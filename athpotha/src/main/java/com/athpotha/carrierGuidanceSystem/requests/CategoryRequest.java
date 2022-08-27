package com.athpotha.carrierGuidanceSystem.requests;

import com.athpotha.carrierGuidanceSystem.model.StudentType;
import com.athpotha.carrierGuidanceSystem.model.UserType;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class CategoryRequest {
	private String categories[];
	private StudentType studentType;
	private UserType userType;
	private String email;
}

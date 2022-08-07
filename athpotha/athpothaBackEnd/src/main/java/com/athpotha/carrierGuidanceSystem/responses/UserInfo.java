package com.athpotha.carrierGuidanceSystem.responses;

import lombok.Data;
import lombok.Getter;

import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
@Data
@Getter
@Setter
@NoArgsConstructor
public class UserInfo {
	private String firstName;
	private String lastName;
	private String email;
	private String userType;
	
//	private Object roles;

//	public String getFirstName() {
//		return firstName;
//	}
//
//	public void setFirstName(String firstName) {
//		this.firstName = firstName;
//	}
//
//	public String getLastName() {
//		return lastName;
//	}
//
//	public void setLastName(String lastName) {
//		this.lastName = lastName;
//	}
//
//	public String getemail() {
//		return email;
//	}
//
//	public void setemail(String email) {
//		this.email = email;
//	}
//
//	public Object getRoles() {
//		return roles;
//	}
//
//	public void setRoles(Object roles) {
//		this.roles = roles;
//	}
}

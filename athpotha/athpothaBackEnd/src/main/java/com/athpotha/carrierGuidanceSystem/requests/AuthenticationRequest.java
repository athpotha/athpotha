package com.athpotha.carrierGuidanceSystem.requests;

import lombok.ToString;

@ToString
public class AuthenticationRequest {
	private String email;
	private String password;
	public String getEmail() {
		return email;
	}
	
	public String getPassword() {
		return password;
	}
}

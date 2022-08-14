package com.athpotha.carrierGuidanceSystem.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@NoArgsConstructor
@ToString
public class UserInfo {
	private Long userId;
	private String email;
	private String userType;
}

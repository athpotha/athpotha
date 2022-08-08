package com.athpotha.carrierGuidanceSystem.model;

import javax.persistence.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Setter
@Getter
public class Post extends OnlinePost{
	private String image;
	private String title;
	private String subTitle;
}

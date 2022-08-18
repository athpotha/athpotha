package com.athpotha.carrierGuidanceSystem.model;

import javax.persistence.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@Setter
@Getter
@ToString
public class Post extends OnlinePost{
	private String image;
	private String title;
}

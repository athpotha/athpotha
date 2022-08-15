package com.athpotha.carrierGuidanceSystem.model;

import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
//@AllArgsConstructor
@Entity
public class Tutor extends User  {
	private String description;
}

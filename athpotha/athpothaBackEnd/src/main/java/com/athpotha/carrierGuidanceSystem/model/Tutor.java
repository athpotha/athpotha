package com.athpotha.carrierGuidanceSystem.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@NoArgsConstructor
//@AllArgsConstructor
@Entity
@Getter
@Setter
public class Tutor extends User  {

	private String school;
	private String subject;
	private String description;
	private String qualification;
	private float rate = 0;



}

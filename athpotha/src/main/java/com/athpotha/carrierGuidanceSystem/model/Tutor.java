package com.athpotha.carrierGuidanceSystem.model;

import javax.persistence.*;

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
	private String description;
}

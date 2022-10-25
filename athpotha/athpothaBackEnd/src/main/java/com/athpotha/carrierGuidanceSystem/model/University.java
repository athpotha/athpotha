package com.athpotha.carrierGuidanceSystem.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;


@NoArgsConstructor
@AllArgsConstructor
@Entity
@Setter
@Getter
public class University extends User {
	private String faculty;
	private String university;
	private String about;
	private boolean isVerified;

	@OneToMany(targetEntity = Course.class, cascade = CascadeType.ALL)
	@JoinColumn(name = "pk_uni_id", referencedColumnName = "user_id")
	private List<Course> coureselist;

	public List<Course> getCoureselist() {
		return coureselist;
	}

	public void setCoureselist(List<Course> coureselist) {
		this.coureselist = coureselist;
	}
}

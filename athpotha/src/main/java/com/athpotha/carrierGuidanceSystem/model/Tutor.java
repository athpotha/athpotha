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
	private String Subject;
	private String School;
	private String qualification;

	@OneToMany(targetEntity = Follower.class,cascade = CascadeType.ALL)
	@JoinColumn(name = "pk_user_id",referencedColumnName = "user_id")
	private List<Follower> followers;

	@OneToMany(targetEntity = Following.class,cascade = CascadeType.ALL)
	@JoinColumn(name = "pk_user_id",referencedColumnName = "user_id")
	private List<Following> followings;

	public List<Follower> getFollowers() {
		return followers;
	}

	public void setFollowers(List<Follower> followers) {
		this.followers = followers;
	}

	public List<Following> getFollowings() {
		return followings;
	}

	public void setFollowings(List<Following> followings) {
		this.followings = followings;
	}

}

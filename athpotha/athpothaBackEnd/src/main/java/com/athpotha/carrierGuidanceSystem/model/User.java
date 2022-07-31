package com.athpotha.carrierGuidanceSystem.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int user_id;
	private String first_name;
	private String last_name;
	private String user_type;
	@Column(unique = true)
	private String email;
	private String password;
	private String profile_picture;
	private boolean is_delete;
	private boolean isEnabled;
	@CreationTimestamp
	@ColumnDefault("CURRENT_TIMESTAMP")
	private Date created_at;
	
	public User() {
		
	}

	

	public User(int user_id, String first_name, String last_name, String user_type, String email, String password,
			String profile_picture, boolean is_delete, boolean isEnabled, Date created_at) {
		this.user_id = user_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.user_type = user_type;
		this.email = email;
		this.password = password;
		this.profile_picture = profile_picture;
		this.is_delete = is_delete;
		this.isEnabled = isEnabled;
		this.created_at = created_at;
	}



	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getProfile_picture() {
		return profile_picture;
	}

	public void setProfile_picture(String profile_picture) {
		this.profile_picture = profile_picture;
	}

	public boolean isIs_delete() {
		return is_delete;
	}

	public void setIs_delete(boolean is_delete) {
		this.is_delete = is_delete;
	}

	public boolean isEnabled() {
		return isEnabled;
	}

	public void setEnabled(boolean isEnabled) {
		this.isEnabled = isEnabled;
	}

	public Date getCreated_at() {
		return created_at;
	}

	public void setCreated_at(Date created_at) {
		this.created_at = created_at;
	}
	
	public String getUser_type() {
		return user_type;
	}

	public void setUser_type(String user_type) {
		this.user_type = user_type;
	}

	@Override
	public String toString() {
		return "User [user_id=" + user_id + ", first_name=" + first_name + ", last_name=" + last_name + ", user_type="
				+ user_type + ", email=" + email + ", password=" + password + ", profile_picture=" + profile_picture
				+ ", is_delete=" + is_delete + ", isEnabled=" + isEnabled + ", created_at=" + created_at + "]";
	}

	
	

}

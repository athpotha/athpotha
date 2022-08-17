package com.athpotha.carrierGuidanceSystem.model;

import java.util.Collection;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.SequenceGenerator;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class User implements UserDetails {
	@Id
	@SequenceGenerator(
			name = "student_sequence",
			sequenceName = "student_sequence",
			allocationSize = 1
	)
	@GeneratedValue(
			strategy = GenerationType.SEQUENCE,
			generator = "student_sequence"
	)
	private Long user_id;
	private String first_name;
	private String last_name;
	@Enumerated(value = EnumType.STRING)
	private UserType user_type;
	@Column(unique = true)
	private String email;
	private String password;
	private String profile_picture = "images/profile/default_profile.jpg";
	private String cover_picture = "images/profile/cover.jpg";
	private boolean userDeleted;
	private boolean enabled;
	private boolean verified;
	@CreationTimestamp
	@ColumnDefault("CURRENT_TIMESTAMP")
	private Date created_at;
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return null;
	}

	@Override
	public String getPassword() {
		return this.password;
	}

	@Override
	public String getUsername() {
		return this.email;
	}

	@Override
	public boolean isAccountNonExpired() {
		return this.enabled;
	}

	@Override
	public boolean isAccountNonLocked() {
		return this.enabled;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return this.enabled;
	}

	@Override
	public boolean isEnabled() {
		return this.enabled;
	}

	public User(String first_name, String last_name, UserType user_type, String email, String password,
			String profile_picture, boolean userDeleted, boolean enabled, boolean verified, Date created_at) {
		this.first_name = first_name;
		this.last_name = last_name;
		this.user_type = user_type;
		this.email = email;
		this.password = password;
		this.profile_picture = profile_picture;
		this.userDeleted = userDeleted;
		this.enabled = enabled;
		this.verified = verified;
		this.created_at = created_at;
	}

	@Override
	public String toString() {
		return "User [user_id=" + user_id + ", first_name=" + first_name + ", last_name=" + last_name + ", user_type="
				+ user_type + ", email=" + email + ", password=" + password + ", profile_picture=" + profile_picture
				+ ", cover_picture=" + cover_picture + ", userDeleted=" + userDeleted + ", enabled=" + enabled
				+ ", verified=" + verified + ", created_at=" + created_at + "]";
	}
	
}

package com.athpotha.carrierGuidanceSystem.model;

import java.util.Collection;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
	private Long userId;
	private String firstName;
	private String lastName;
	private String userName;
	@Enumerated(value = EnumType.STRING)
	private UserType userType;
	@Column(unique = true)
	private String email;
	private String password;
	private String profilePicture = "/images/profile/default_profile.jpg";
	private String coverPicture = "/images/profile/cover.jpg";
	private boolean userDeleted;
	private boolean enabled;
	private boolean verified;
	private String description;
	@CreationTimestamp
	@ColumnDefault("CURRENT_TIMESTAMP")
	private Date created_at;
	private boolean hasLogged = false;
	
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

	@OneToMany(targetEntity = Notification.class,cascade = CascadeType.ALL)
	@JoinColumn(name = "receiver_id",referencedColumnName = "userId")
	private List<Notification> notifications;
	
	@ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
    		name = "follow",
    		joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "following_id"))
	@JsonIgnore
    private List<User> following;
	
	public void addFollow(User user) {
		following.add(user);
	}
	
}

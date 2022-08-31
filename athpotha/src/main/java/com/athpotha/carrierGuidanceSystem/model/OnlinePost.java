package com.athpotha.carrierGuidanceSystem.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import lombok.Getter;
import lombok.NoArgsConstructor;
//
//import net.bytebuddy.dynamic.loading.ClassReloadingStrategy.Strategy;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Setter
@Getter
@ToString
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class OnlinePost {
	@Id
	@SequenceGenerator(
			name = "onlinePost_sequence",
			sequenceName = "onlinePost_sequence",
			allocationSize = 1
	)
	@GeneratedValue(
			strategy = GenerationType.SEQUENCE,
			generator = "onlinePost_sequence"
	)
	private Long postId;
	@Enumerated(value = EnumType.STRING)
	private OnlinePostType type;
//	private String postType;
	private Long upVotes = (long) 0;
	private Long downVotes = (long) 0;
	@CreationTimestamp
	@ColumnDefault("CURRENT_TIMESTAMP")
	private Date addedTime;
	private Long numberOfComments = (long) 0;
	@ManyToOne
	@JoinColumn(
			name = "user_id",
			referencedColumnName = "userId"
	)
	private User user;
	
	
	public OnlinePost(OnlinePostType type, Long upVotes, Long downVotes, Date addedTime) {
		this.type = type;
//		this.postType = postType;
		this.upVotes = upVotes;
		this.downVotes = downVotes;
		this.addedTime = addedTime;
	}
	


}

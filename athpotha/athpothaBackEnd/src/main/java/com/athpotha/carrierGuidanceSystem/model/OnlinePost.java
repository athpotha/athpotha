package com.athpotha.carrierGuidanceSystem.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

import org.hibernate.annotations.ColumnDefault;

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
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long postId;
	@Enumerated(value = EnumType.STRING)
	private OnlinePostType type;
	private String educationType;
	private Long upVotes;
	private Long downVotes;
	@ColumnDefault("CURRENT_TIMESTAMP")
	private Date addedTime;
	private Long numberOfComments;

	public OnlinePost(OnlinePostType type, String educationType, Long upVotes, Long downVotes, Date addedTime) {
		this.type = type;
		this.educationType = educationType;
		this.upVotes = upVotes;
		this.downVotes = downVotes;
		this.addedTime = addedTime;
	}

}

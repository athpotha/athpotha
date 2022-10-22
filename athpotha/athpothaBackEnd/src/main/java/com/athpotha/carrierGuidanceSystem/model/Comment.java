package com.athpotha.carrierGuidanceSystem.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Comment {
	@Id
	@SequenceGenerator(
			name = "comment_sequence",
			sequenceName = "comment_sequence",
			allocationSize = 1
	)
	@GeneratedValue(
			strategy = GenerationType.SEQUENCE,
			generator = "comment_sequence"
	)
	private Long commentId;
	private Long upVotes = 0L;
	private Long downVotes = 0L;
	@CreationTimestamp
	@ColumnDefault("CURRENT_TIMESTAMP")
	private Date addedDate;
	private String comment;
	private boolean commentDeleted = false;
	@ManyToOne(targetEntity = User.class,cascade = CascadeType.ALL)
	@JoinColumn(name = "commenter_id",referencedColumnName = "userId")
	private User user;
	
	@OneToMany
	@JoinColumn(
			name = "comment_id",
			referencedColumnName = "commentId"
	)
	private List<Reply> replies;
	
	public void addReply(Reply reply) {
		replies.add(reply);
	}
}

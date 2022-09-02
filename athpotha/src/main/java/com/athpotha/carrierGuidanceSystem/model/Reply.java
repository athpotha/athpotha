package com.athpotha.carrierGuidanceSystem.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@NoArgsConstructor
public class Reply {
	@Id
	@SequenceGenerator(
			name = "reply_sequence",
			sequenceName = "reply_sequence",
			allocationSize = 1
	)
	@GeneratedValue(
			strategy = GenerationType.SEQUENCE,
			generator = "reply_sequence"
	)
	private Long replyId;
	private Long downvotes = 0L;
	private Long upvotes = 0L;
	
	@CreationTimestamp
	@ColumnDefault("CURRENT_TIMESTAMP")
	private Date addedDate;
	private String reply;
	
	@ManyToOne(targetEntity = User.class,cascade = CascadeType.ALL)
	@JoinColumn(name = "replyer_id",referencedColumnName = "userId")
	private User user;
	
	@ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
    		name = "repliesOfReply",
    		joinColumns = @JoinColumn(name = "reply_id"),
            inverseJoinColumns = @JoinColumn(name = "reply_reply_id"))
//	@JsonIgnore
    private List<Reply> replies;
	
	public void addReplyToReply(Reply reply) {
		replies.add(reply);
	}
}

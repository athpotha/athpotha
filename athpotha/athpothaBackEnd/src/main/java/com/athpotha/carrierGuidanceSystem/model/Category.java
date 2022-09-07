package com.athpotha.carrierGuidanceSystem.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;

import com.athpotha.carrierGuidanceSystem.controller.OnlinePostsController;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Setter
@Getter
@ToString
@Entity
public class Category {
	@Id
	@SequenceGenerator(
			name = "category_sequence",
			sequenceName = "category_sequence",
			allocationSize = 1
	)
	@GeneratedValue(
			strategy = GenerationType.SEQUENCE,
			generator = "category_sequence"
	)
	private Long categoryId;
	
//	@Column(unique = true)
	private String categoryName;

	@Enumerated(value = EnumType.STRING)
	private StudentType studentType;
	
	private String image = "/images/main-wall/main-wall-1.jpg";
	
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(
			name = "user_education_category",
			joinColumns = @JoinColumn(
					name = "category_id",
					referencedColumnName = "categoryId"
			),
			inverseJoinColumns = @JoinColumn(
					name = "user_id",
					referencedColumnName = "user_id"
			)
	)
	private List<Student> students;
	
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(
			name = "user_education_category",
			joinColumns = @JoinColumn(
					name = "category_id",
					referencedColumnName = "categoryId"
			),
			inverseJoinColumns = @JoinColumn(
					name = "user_id",
					referencedColumnName = "user_id"
			)
	)
	private List<Tutor> tutors;
	
	@ManyToMany(cascade = CascadeType.ALL)
	@JoinTable(
			name = "user_education_category",
			joinColumns = @JoinColumn(
					name = "category_id",
					referencedColumnName = "categoryId"
			),
			inverseJoinColumns = @JoinColumn(
					name = "user_id",
					referencedColumnName = "user_id"
			)
	)
	private List<Community> communities;

	public Category(String categoryName, StudentType studentType) {
		this.categoryName = categoryName;
		this.studentType = studentType;
	}
	
	public List<Category> findStudentCategories() {
		return null;
	}
	
	@OneToMany(mappedBy="category")
	@JsonIgnore
	List<OnlinePost> posts;
	
	public void addPost(Post post) {
		posts.add(post);
	}
	
	public void addQuestion(Question question) {
		posts.add(question);
	}
}

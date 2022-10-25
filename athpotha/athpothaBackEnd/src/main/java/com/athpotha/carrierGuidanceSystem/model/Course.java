package com.athpotha.carrierGuidanceSystem.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.attoparser.dom.Text;

import javax.persistence.*;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Setter
@Getter
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String courseName;
    private String courseDescription;
    private String preRequirements;
    private String carrerOpertunities;

    @OneToMany(targetEntity = Review.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "pk_course_id", referencedColumnName = "id")
    private List<Review> reviewList;

    public List<Review> getReviewList() {
        return reviewList;
    }

    public void setReviewList(List<Review> reviewList) {
        this.reviewList = reviewList;
    }

}

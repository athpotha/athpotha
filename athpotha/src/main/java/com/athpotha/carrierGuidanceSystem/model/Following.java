package com.athpotha.carrierGuidanceSystem.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class Following {

    @Id
    private Long id;
    private Long following_id;

    public Following(){}

    public Following(Long following_id) {
        this.following_id = following_id;
    }

    public Following(Long id, Long following_id) {
        this.id = id;
        this.following_id = following_id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getFollowing_id() {
        return following_id;
    }

    public void setFollowing_id(Long following_id) {
        this.following_id = following_id;
    }
}

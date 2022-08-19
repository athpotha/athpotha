package com.athpotha.carrierGuidanceSystem.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Follower {

    @Id
    private Long id;
    private Long follower_id;

}

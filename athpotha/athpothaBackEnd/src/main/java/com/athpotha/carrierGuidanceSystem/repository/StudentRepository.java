package com.athpotha.carrierGuidanceSystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.athpotha.carrierGuidanceSystem.model.User;


@Repository
public interface StudentRepository extends JpaRepository<User, Long>{}
//public interface UserRepository extends JpaRepository<>



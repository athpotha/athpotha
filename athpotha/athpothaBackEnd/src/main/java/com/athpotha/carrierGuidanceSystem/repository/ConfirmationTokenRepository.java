package com.athpotha.carrierGuidanceSystem.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.athpotha.carrierGuidanceSystem.model.ConfirmationToken;
import com.athpotha.carrierGuidanceSystem.model.User;
//import com.athpotha.carrierGuidanceSystem.model.User;

@Repository("confirmationTokenRepository")
public interface ConfirmationTokenRepository extends JpaRepository<ConfirmationToken, Integer> {
	ConfirmationToken findByConfirmationToken(String confirmationToken);
	ConfirmationToken findByUser(User user);

//	void save(ConfirmationToken confirmationToken);
}



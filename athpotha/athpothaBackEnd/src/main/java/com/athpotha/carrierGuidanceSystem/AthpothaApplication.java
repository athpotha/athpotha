package com.athpotha.carrierGuidanceSystem;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.athpotha.carrierGuidanceSystem.model.Admin;
import com.athpotha.carrierGuidanceSystem.model.UserType;
import com.athpotha.carrierGuidanceSystem.repository.AdminRepository;

@SpringBootApplication
public class AthpothaApplication {
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private AdminRepository adminRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(AthpothaApplication.class, args);
	}
	
//	@PostConstruct
//	protected void init() {
//		Admin admin = new Admin();
//		
//		admin.setFirst_name("Athpotha");
//		admin.setLast_name("Admin");
//		admin.setUser_type(UserType.admin);
//		admin.setEmail("athpothaAdmin121@gmail.com");
//		admin.setPassword(passwordEncoder.encode("Athpotha@123"));
//		admin.setVerified(true);
//		admin.setEnabled(true);
//		adminRepository.save(admin);
//	}
}

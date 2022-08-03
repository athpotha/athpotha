package com.athpotha.carrierGuidanceSystem;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.athpotha.carrierGuidanceSystem.model.User;
import com.athpotha.carrierGuidanceSystem.repository.UserRepository;

@SpringBootApplication
public class AthpothaApplication {
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private UserRepository userRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(AthpothaApplication.class, args);
	}
	
//	@PostConstruct
//	protected void init() {
//		
////		List<Authority> authorityList=new ArrayList<>();
////		
////		authorityList.add(createAuthority("USER","User role"));
//		//authorityList.add(createAuthority("ADMIN","Admin role"));
//		
//		User user=new User();
//		
//		user.setFirst_name("kumud");
//		user.setLast_name("Perera");
//		user.setEmail("nethmalperera54@gmail.com");
//		user.setPassword(passwordEncoder.encode("1234567"));
//		user.setVerified(true);
//		user.setEnabled(true);
//		userRepository.save(user);
//		user.setUserName("pardeep161");
//		user.setFirstName("Pardeep");
//		user.setLastName("K");
//		
//		user.setPassword(passwordEncoder.encode("pardeep@123"));
//		user.setEnabled(true);
//		user.setAuthorities(authorityList);
//		
//		userDetailsRepository.save(user);
		
		
		
//	}
}

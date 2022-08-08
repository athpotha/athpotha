package com.athpotha.carrierGuidanceSystem.config;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.athpotha.carrierGuidanceSystem.service.CustomUserService;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Autowired
	private CustomUserService userService;

	@Autowired
	private JWTTokenHelper jWTTokenHelper;

	@Autowired
	private AuthenticationEntryPoint authenticationEntryPoint;

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//
//		auth.inMemoryAuthentication().withUser("Pardeep").password(passwordEncoder().encode("test@123"))
//				.authorities("USER", "ADMIN");

		auth.userDetailsService(userService).passwordEncoder(passwordEncoder());

	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and().exceptionHandling().authenticationEntryPoint(authenticationEntryPoint);
		http.authorizeRequests().antMatchers("/api/v1/auth/login").permitAll();
		http.authorizeRequests().antMatchers("/h2-console/**").permitAll();
		
//		http.authorizeRequests().antMatchers("/api/v1/auth/userDetials").permitAll();
//		http.authorizeRequests().antMatchers("/student/getAll").permitAll();
//		http.authorizeRequests().antMatchers("/user/register").permitAll();
		http.authorizeRequests().antMatchers(HttpMethod.OPTIONS, "/**").permitAll().anyRequest().authenticated();
//				.antMatchers(HttpMethod.OPTIONS, "/**").permitAll().anyRequest().authenticated())
//		http.authorizeRequests().antMatchers("/api/v1/auth/userinfo").permitAll();
//		http.authorizeRequests().antMatchers(HttpMethod.OPTIONS, "/**").permitAll().anyRequest().authenticated();
//		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and().exceptionHandling()
//				.authenticationEntryPoint(authenticationEntryPoint).and()
//				.authorizeRequests((request) -> request.antMatchers("/api/v1/auth/login").permitAll()
//						.antMatchers(HttpMethod.OPTIONS, "/**").permitAll().anyRequest().authenticated())
//				.addFilterBefore(new JWTAuthenticationFilter(userService, jWTTokenHelper),
//						UsernamePasswordAuthenticationFilter.class);
//

		http.addFilterBefore(new JWTAuthenticationFilter(userService, jWTTokenHelper),
				UsernamePasswordAuthenticationFilter.class);
		http.csrf().disable().cors().and().headers().frameOptions().disable();
//		http.csrf().disable().cors();
	}

}

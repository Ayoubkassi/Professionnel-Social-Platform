package com.ryotakisse;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@SpringBootApplication
@RestController
@RequestMapping("/api/v1/users")
public class TalentHunterApplication {

	private final UserRepository userRepository;

	public TalentHunterApplication(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(TalentHunterApplication.class, args);
	}

	@GetMapping
	public List<User> getUsers(){
		return userRepository.findAll();
	}


}

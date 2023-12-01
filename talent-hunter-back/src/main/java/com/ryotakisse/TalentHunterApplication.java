package com.ryotakisse;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

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

	record  NewUserRequest(
			String email,
			String username,
			String password
	){

	}

	@PostMapping
	public void addUser(@RequestBody NewUserRequest request){
		User user = new User();
		user.setEmail(request.email);
		user.setPassword(request.password);
		user.setUsername(request.username);
		userRepository.save(user);
	}


}

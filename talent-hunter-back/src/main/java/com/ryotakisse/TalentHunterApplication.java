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


	@DeleteMapping("{customerId}")
	public void deleteUser(@PathVariable("customerId") Integer id){
		userRepository.deleteById(id);
	}

	@PutMapping("{customerId}")
	public void updateUser(@PathVariable("customerId") Integer id, @RequestBody NewUserRequest request){
		User existingUser = userRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("User not found with id: " + id));

		// Update user information
		existingUser.setEmail(request.email);
		existingUser.setPassword(request.password);
		existingUser.setUsername(request.username);

		// Save the updated user
		userRepository.save(existingUser);
	}

	@GetMapping("{customerId}")
	public User getUserById(@PathVariable("customerId") Integer id) {
		return userRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("User not found with id: " + id));
	}




}

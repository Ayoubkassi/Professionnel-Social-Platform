package com.ryotakisse;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
@SpringBootApplication
@RestController
@RequestMapping("/api/v1")
public class TalentHunterApplication {

	private final UserRepository userRepository;
	private final  JobOfferRepository jobOfferRepository;

	public TalentHunterApplication(UserRepository userRepository, JobOfferRepository jobOfferRepository) {
		this.userRepository = userRepository;
		this.jobOfferRepository = jobOfferRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(TalentHunterApplication.class, args);
	}

	@GetMapping("users")
	public List<User> getUsers(){
		return userRepository.findAll();
	}

	record  NewUserRequest(
			String email,
			String username,
			String password
	){

	}

	@PostMapping("users")
	public void addUser(@RequestBody NewUserRequest request){
		User user = new User();
		user.setEmail(request.email);
		user.setPassword(request.password);
		user.setUsername(request.username);
		userRepository.save(user);
	}


	@DeleteMapping("users/{userId}")
	public void deleteUser(@PathVariable("userId") Integer id){
		userRepository.deleteById(id);
	}

	@PutMapping("users/{userId}")
	public void updateUser(@PathVariable("userId") Integer id, @RequestBody NewUserRequest request){
		User existingUser = userRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("User not found with id: " + id));

		// Update user information
		existingUser.setEmail(request.email);
		existingUser.setPassword(request.password);
		existingUser.setUsername(request.username);

		// Save the updated user
		userRepository.save(existingUser);
	}

	@GetMapping("users/{userId}")
	public User getUserById(@PathVariable("userId") Integer id) {
		return userRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("User not found with id: " + id));
	}

	// craete some crud opprations regradign the jobOffer entity


	@GetMapping("jobs")
	public List<JobOffer> getJobs(){
		return jobOfferRepository.findAll();
	}

	record  NewJobRequest(
			String description,
			Date date,
			String title,
			String type,
			String salary,
			String location
	){

	}

	@PostMapping("jobs")
	public void addJob(@RequestBody NewJobRequest request){
		JobOffer job = new JobOffer();
		job.setDescription(request.description);
		job.setDate(request.date);
		job.setTitle(request.title);
		job.setType(request.type);
		job.setSalary(request.salary);
		job.setLocation(request.location);
		jobOfferRepository.save(job);
	}


	@DeleteMapping("jobs/{jobId}")
	public void deleteJobOffer(@PathVariable("jobId") Integer id){
		jobOfferRepository.deleteById(id);
	}

	@PutMapping("jobs/{jobId}")
	public void updateJob(@PathVariable("jobId") Integer id, @RequestBody NewJobRequest request){
		JobOffer existingJobOffer = jobOfferRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Job not found with id: " + id));

		// Update user information
		existingJobOffer.setDescription(request.description);
		existingJobOffer.setDate(request.date);
		existingJobOffer.setLocation(request.location);
		existingJobOffer.setType(request.type);
		existingJobOffer.setSalary(request.salary);
		existingJobOffer.setTitle(request.title);

		// Save the updated user
		jobOfferRepository.save(existingJobOffer);
	}

	@GetMapping("jobs/{jobId}")
	public JobOffer getJobOfferById(@PathVariable("jobId") Integer id) {
		return jobOfferRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Job not found with id: " + id));
	}

	// add method so that a user can postule to a job
	@PostMapping("users/{userId}/apply/{jobId}")
	public void applyForJob(@PathVariable("userId") Integer userId, @PathVariable("jobId") Integer jobId) {
		User user = userRepository.findById(userId)
				.orElseThrow(() -> new RuntimeException("User not found with id: " + userId));

		JobOffer jobOffer = jobOfferRepository.findById(jobId)
				.orElseThrow(() -> new RuntimeException("Job offer not found with id: " + jobId));

		user.applyForJob(jobOffer);

		userRepository.save(user);
		jobOfferRepository.save(jobOffer);
	}


	// add some simple login and logout functinality for the user
	// check login
	// for the login it will be a basic post REquest with data which is login and pasword
	// so i will craete record specific for it's request
	record NewLoginRequest(
			String userlogin ,
			String passlogin
	){}

	@PostMapping("users/login")
	public ResponseEntity<?> loginUser(@RequestBody NewLoginRequest request) {
		// Find user by login
		System.out.println("\n\n\nhelloooooooooooo\n\n\n");
		User user = userRepository.findByUsername(request.userlogin)
				.orElseThrow(() -> new RuntimeException("User not found with login: " + request.userlogin));

		// Check if the provided password matches the user's password
		if (user.getPassword().equals(request.passlogin)) {
			// Passwords match, return 200 response with user instance
			return ResponseEntity.ok(user);
		} else {
			// Passwords do not match, return error response
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
					.body("Login credentials are invalid");
		}
	}





}

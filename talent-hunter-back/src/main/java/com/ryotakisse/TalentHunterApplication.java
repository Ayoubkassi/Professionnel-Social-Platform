package com.ryotakisse;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

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


	@DeleteMapping("users/{customerId}")
	public void deleteUser(@PathVariable("customerId") Integer id){
		userRepository.deleteById(id);
	}

	@PutMapping("users/{customerId}")
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

	@GetMapping("users/{customerId}")
	public User getUserById(@PathVariable("customerId") Integer id) {
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





}

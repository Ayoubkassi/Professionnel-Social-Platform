package com.ryotakisse;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class TalentHunterApplicationTests {

	@Test
	void contextLoads() {
	}

	// for db tests
//	INSERT INTO platform_user (id,email,password,username) VALUES(nextval('user_id_sequence'),'Ayoub','password','ayoub@gmail.com');

//	INSERT INTO job_offer (id,date,description,location,salary,title,type) VALUES(nextval('offer_id_sequence'),CURRENT_TIMESTAMP,'Back End Engineer','Paris','70k$','SE','FullTime')

}

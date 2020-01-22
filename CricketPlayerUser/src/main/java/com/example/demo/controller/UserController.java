package com.example.demo.controller;


import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.UserNotFoundException;
import com.example.demo.model.User;
import com.example.demo.service.UserService;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class UserController {

	private static Logger logger=LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	private UserService userservice;


	@PostMapping(value = "/users/create")
	  public ResponseEntity<String> createUser(@RequestBody User user) {
		if (userservice.createUser(user)) {
			return new ResponseEntity<>("Created", HttpStatus.CREATED);
		} else {
			return new ResponseEntity<>("Conflict", HttpStatus.CONFLICT);
		}
	  }
	
	@PostMapping(value="/users")
	public ResponseEntity<?> findUser(@RequestBody User user) throws UserNotFoundException
	{
		try {
			List<User> userlist = userservice.loginById(user.getUserid(), user.getPassword());
			if(userlist.isEmpty())
				throw new UserNotFoundException();
			
			String token =
					Jwts.builder().
					setId(user.getUserid())
					.setIssuedAt(new Date()).
					signWith(SignatureAlgorithm.HS256, "usersecretkey").
					compact();
			
			// Add it to a Map and send the map in response body
			Map<String, String> map1 = new HashMap<>();
			map1.put("token", token);
			map1.put("message", "User Successfully logged in");
			return  new ResponseEntity<>(map1, HttpStatus.OK);
			
		
		
		}
		catch(Exception e)
		{
			logger.error("exception");
			return null;
		}
		
	}
	
	@GetMapping(value = "/users/{id}")
	public User getUserByUserId(@PathVariable("id") String userId) throws UserNotFoundException {
		User user;
		try {
			user=userservice.getByUserId(userId);
		} catch (Exception e) {
			logger.error("exceptions");
			user=null;
		}
			return user;
	}
	
}

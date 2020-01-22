package com.example.demo.service;


import java.util.List;

import com.example.demo.model.User;

public interface UserService {
	
	public boolean createUser(User user);
	
	public List<User> loginById(String userid, String password);
	public User getByUserId(String userid);
}
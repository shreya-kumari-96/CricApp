package com.example.demo.service;

import java.util.Collections;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.UserDAO;
import com.example.demo.model.User;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserDAO userdao;
	

	@Override
	public boolean createUser(User user) {
		userdao.save(user);
		return true;
	}
	
	

	@Override
	public List<User> loginById(String userid, String password) {
		
		List<User> userList = userdao.findByUseridAndPassword(userid, password);
		
		
		if(!userList.isEmpty()) {
			return userList;
		}
		else
			return Collections.emptyList();
	}

	@Override
	public User getByUserId(String userid) {
		return userdao.findByUserid(userid);
	}
	
}
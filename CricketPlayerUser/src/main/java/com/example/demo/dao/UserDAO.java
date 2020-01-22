package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.User;

@Repository
public interface UserDAO extends JpaRepository<User, Integer>{

	public List<User> findByUseridAndPassword(String userid, String password);
	public User findByUserid(String userid);
}

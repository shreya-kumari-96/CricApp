package com.example.demo.dao;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.Favourite;

public interface FavouriteDAO extends MongoRepository<Favourite, Integer> {
	
	public List<Favourite> findByUserid(String uid);
	public boolean deleteByUseridAndPid(String userid, int pid);
}

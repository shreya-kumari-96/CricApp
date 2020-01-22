package com.example.demo.dao;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.Recommendation;

public interface RecommendationDAO extends MongoRepository<Recommendation, Integer>{

	public List<Recommendation> findByUserid(String uid);
	public boolean deleteByUseridAndPid(String userid, int pid);
}

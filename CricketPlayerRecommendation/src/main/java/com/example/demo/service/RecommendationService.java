package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Recommendation;

public interface RecommendationService {

	public Recommendation saveRec(Recommendation r);
	
	public List<Recommendation> getRecs(String uid);
	
	public boolean delRecByid(String uid, int pid);
}

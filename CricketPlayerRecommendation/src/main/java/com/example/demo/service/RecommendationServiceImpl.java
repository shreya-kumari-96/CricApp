package com.example.demo.service;

import java.util.Collections;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.RecommendationDAO;
import com.example.demo.model.Recommendation;

@Service
public class RecommendationServiceImpl implements RecommendationService	{

	private static Logger logger=LoggerFactory.getLogger(RecommendationServiceImpl.class);
	
	@Autowired
	private RecommendationDAO recdao;
	
	@Override
	public Recommendation saveRec(Recommendation r) {
		
		Recommendation recobj=recdao.save(r);
		logger.info("recommendation added");
		return recobj;
	}

	@Override
	public List<Recommendation> getRecs(String uid) {
		
		List<Recommendation> reclist = recdao.findByUserid(uid);
		if(!reclist.isEmpty())
			return reclist;
		else
			return Collections.emptyList();
		
	}

	@Override
	public boolean delRecByid(String uid, int pid) {
		try
		{
		recdao.deleteByUseridAndPid(uid, pid);
		
		}
		catch (ClassCastException e) {
			logger.error("exception");
		}
		return true;
	}

}

package com.example.demo.service;

import java.util.Collections;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.FavouriteDAO;
import com.example.demo.model.Favourite;


@Service
public class FavouriteServiceImpl implements FavouriteService{

	private static Logger logger=LoggerFactory.getLogger(FavouriteServiceImpl.class);
	
	@Autowired
	private FavouriteDAO favdao;
	
	@Override
	public Favourite saveFav(Favourite f) {
		
		return favdao.save(f);
	}

	@Override
	public List<Favourite> getFavs(String uid) {
		
		List<Favourite> favlist = favdao.findByUserid(uid);
		if(!favlist.isEmpty())
			return favlist;
		else
			return Collections.emptyList();
	}

	@Override
	public List<Favourite> getFavlist() {
		
		List<Favourite> favlist=favdao.findAll();
		if(!favlist.isEmpty())
		{
			return favlist;
		}
		else
		{
			return Collections.emptyList();
		}
	}

	@Override
	public boolean delFavByid(String uid, int pid){
		try
		{
		favdao.deleteByUseridAndPid(uid, pid);
		logger.info("delete done");
		}
		catch (ClassCastException e) {
			logger.error("exception");
		}
		return true;
	}
	

}

package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Favourite;

public interface FavouriteService {

	public Favourite saveFav(Favourite f);
	
	public List<Favourite> getFavs(String uid);
	
	public List<Favourite> getFavlist();
	
	public boolean delFavByid(String uid, int pid);
}

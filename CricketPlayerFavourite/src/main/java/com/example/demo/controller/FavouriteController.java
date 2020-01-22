package com.example.demo.controller;

import java.util.Collections;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.FavouriteAlreadyExistsException;
import com.example.demo.exception.FavouriteNotFoundException;
import com.example.demo.model.Favourite;
import com.example.demo.service.FavouriteService;


@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class FavouriteController {
	
	private static Logger logger=LoggerFactory.getLogger(FavouriteController.class);
	
	@Autowired
	private FavouriteService favservice;
	
	@PostMapping("/cplayer/addFav")
	 public ResponseEntity<String> addFav(@RequestBody Favourite fav) throws FavouriteAlreadyExistsException{
					Favourite favobj = favservice.saveFav(fav);
			if(favobj != null)
			{
				return new ResponseEntity<>(HttpStatus.CREATED);
			}
			else
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			
		
	}
	
	@GetMapping("/cplayer/fav/{userid}")
	public List<Favourite> getFavs(@PathVariable("userid") String uid) throws FavouriteNotFoundException{
		
			List<Favourite> favlist = favservice.getFavs(uid);
			if(!favlist.isEmpty())
			{
				logger.info(favlist.get(0).getUserid());
				return favlist;
			}
			else
			{
				return Collections.emptyList();
			}
		
		
	}
	
	@DeleteMapping("/cplayer/delFav/{userid}/{pid}")
	  public ResponseEntity<String> deleteFav(@PathVariable("userid") String uid,@PathVariable("pid") int pid) {
	    logger.info("Delete fav by id");
	 
	    favservice.delFavByid(uid, pid);
	    return new ResponseEntity<>("", HttpStatus.OK);
	  }
}

package com.example.demo.controller;

import java.util.Collections;
import java.util.List;

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

import com.example.demo.model.Recommendation;
import com.example.demo.service.RecommendationService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class RecommendationController {
	
	@Autowired
	private RecommendationService recservice;
	
	@PostMapping("/cplayer/addRec")
	 public ResponseEntity<String> addRec(@RequestBody Recommendation rec) {
			Recommendation recobj = recservice.saveRec(rec);
			if(recobj != null)
				return new ResponseEntity<>(HttpStatus.CREATED);
			else
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		
	}
	
	@GetMapping("/cplayer/rec/{userid}")
	public List<Recommendation> getRecs(@PathVariable("userid") String uid){
			List<Recommendation> reclist = recservice.getRecs(uid);
			if(!reclist.isEmpty())
			{
				return reclist;
			}
			else
			{
				return Collections.emptyList();
			}
	}
	
	@DeleteMapping("/cplayer/delRec/{userid}/{pid}")
	  public ResponseEntity<String> deleteRec(@PathVariable("userid") String uid,@PathVariable("pid") int pid) {
	 
	    recservice.delRecByid(uid, pid);
	    return new ResponseEntity<>(HttpStatus.OK);

	  }
}

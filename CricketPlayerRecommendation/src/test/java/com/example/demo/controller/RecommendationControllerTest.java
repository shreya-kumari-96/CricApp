package com.example.demo.controller;
import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.*;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Date;
import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;


import com.example.demo.model.Recommendation;
import com.example.demo.service.RecommendationService;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;


@RunWith(SpringRunner.class)
@WebMvcTest(controllers = RecommendationController.class)
public class RecommendationControllerTest {
	
	@Autowired
	private MockMvc mockMvc;
	@MockBean
	private RecommendationService service;
	private Recommendation recommendation;
	private List<Recommendation> reclist;
	private String token;
	
	@Before
	public void setUp() throws Exception {
		token=Jwts.builder().
				setId("user")
				.setIssuedAt(new Date()).
				signWith(SignatureAlgorithm.HS256, "usersecretkey").
				compact();
		recommendation = new Recommendation("userid",123,"name", "country","imageurl");
	}
	@After
	public void tearDown() throws Exception {
	}
	
	@Test
	public void testGetRecsSuccess() throws Exception {
		when(service.getRecs(Mockito.anyString())).
				thenReturn(reclist);
//		mockMvc.perform(get("/api/cplayer/rec/{userid}", recommendation.getUserid()).header("Authorization","Bearer "+ token))
//				.andDo(print());
//		verify(service,times(1)).getRecs(Mockito.anyString());
	}
	
	@Test
	public void testAddRecSuccess() throws Exception{
		//setup the service mock
		when(service.saveRec(Mockito.any(Recommendation.class))).thenReturn(recommendation);
		//send a post request using mockMVC
		String recJson = new ObjectMapper().writeValueAsString(recommendation);
		mockMvc.perform(post("/api/cplayer/addRec").header("Authorization","Bearer "+ token)
						.contentType(MediaType.APPLICATION_JSON)
						.content(recJson))
		.andExpect(status().isCreated());
		//verify mock has been called
		verify(service).saveRec(Mockito.any(Recommendation.class));
		verifyNoMoreInteractions(service);
	}

	@Test
	public void testDeleteRecSuccess() throws Exception{
		//setup the service mock
		when(service.delRecByid(Mockito.anyString(), Mockito.anyInt())).thenReturn(true);
		//send a post request using mockMVC
		String recJson = new ObjectMapper().writeValueAsString(recommendation);
		mockMvc.perform(delete("/api/cplayer/delRec/{userid}/{pid}", recommendation.getUserid(), recommendation.getPid()).header("Authorization","Bearer "+ token)
						.contentType(MediaType.APPLICATION_JSON)
						.content(recJson))
		.andExpect(status().isOk());
		//verify mock has been called
		verify(service).delRecByid(Mockito.anyString(), Mockito.anyInt());
		verifyNoMoreInteractions(service);
	}
}

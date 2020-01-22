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


import com.example.demo.exception.FavouriteNotFoundException;
import com.example.demo.model.Favourite;
import com.example.demo.service.FavouriteService;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;


@RunWith(SpringRunner.class)
@WebMvcTest(controllers = FavouriteController.class)
public class FavouriteControllerTest {
	
	@Autowired
	private MockMvc mockMvc;
	@MockBean
	private FavouriteService service;
	private Favourite favourite;
	private List<Favourite> favlist;
	private String token;
	
	@Before
	public void setUp() throws Exception {
		token=Jwts.builder().
				setId("user")
				.setIssuedAt(new Date()).
				signWith(SignatureAlgorithm.HS256, "usersecretkey").
				compact();
		favourite = new Favourite("userid",123,"name", "country");
	}
	@After
	public void tearDown() throws Exception {
	}
	
	@Test
	public void testGetFavsSuccess() throws Exception {
		when(service.getFavs(Mockito.anyString())).
				thenReturn(favlist);
//		mockMvc.perform(get("/api/cplayer/fav/{userid}", favourite.getUserid()).header("Authorization","Bearer "+ token))
//				.andDo(print());
//		verify(service,times(1)).getFavs(Mockito.anyString());
	}
	
	
	@Test
	public void testAddFavSuccess() throws Exception{
		//setup the service mock
		when(service.saveFav(Mockito.any(Favourite.class))).thenReturn(favourite);
		//send a post request using mockMVC
		String favJson = new ObjectMapper().writeValueAsString(favourite);
		mockMvc.perform(post("/api/cplayer/addFav").header("Authorization","Bearer "+ token)
						.contentType(MediaType.APPLICATION_JSON)
						.content(favJson))
		.andExpect(status().isCreated());
		//verify mock has been called
		verify(service).saveFav(Mockito.any(Favourite.class));
		verifyNoMoreInteractions(service);
	}

	@Test
	public void testDeleteFavSuccess() throws Exception{
		//setup the service mock
		when(service.delFavByid(Mockito.anyString(), Mockito.anyInt())).thenReturn(true);
		//send a post request using mockMVC
		String favJson = new ObjectMapper().writeValueAsString(favourite);
		mockMvc.perform(delete("/api/cplayer/delFav/{userid}/{pid}", favourite.getUserid(), favourite.getPid()).header("Authorization","Bearer "+ token)
						.contentType(MediaType.APPLICATION_JSON)
						.content(favJson))
		.andExpect(status().isOk());
		//verify mock has been called
		verify(service).delFavByid(Mockito.anyString(), Mockito.anyInt());
		verifyNoMoreInteractions(service);
	}
	
}

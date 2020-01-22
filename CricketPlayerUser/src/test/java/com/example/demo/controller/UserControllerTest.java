package com.example.demo.controller;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

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

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;


@RunWith(SpringRunner.class)
@WebMvcTest(controllers = UserController.class)
public class UserControllerTest {

	@Autowired
	private MockMvc mockMvc;
	@MockBean
	private UserService service;
	private User user;
	private List<User> userlist;
	
	@Before
	public void setUp() throws Exception {
		user = new User(123, "firstname", "userid", "password", "image");
	}
	
	@After
	public void tearDown() throws Exception {
	}
	
	@Test
	public void testAddUserSuccess() throws Exception{
		//setup the service mock
		when(service.createUser(Mockito.any(User.class))).thenReturn(true);
		//send a post request using mockMVC
		String userJson = new ObjectMapper().writeValueAsString(user);
		mockMvc.perform(post("/api/users/create")
						.contentType(MediaType.APPLICATION_JSON)
						.content(userJson))
		.andExpect(status().isCreated());
		//verify mock has been called
		verify(service).createUser(Mockito.any(User.class));
		verifyNoMoreInteractions(service);
	}
	
	@Test
	public void testGetUserSuccess() throws Exception {
		when(service.getByUserId(Mockito.anyString())).
				thenReturn(user);
		mockMvc.perform(get("/api/users/{id}", user.getUserid()))
				.andExpect(status().isOk())
				.andDo(print());
		verify(service,times(1)).getByUserId(Mockito.anyString());
	}
	
//	@Test
//	public void testGetUserFailure() throws Exception {
//		when(service.getByUserId(Mockito.anyString())).
//			thenThrow(Exception.class);
//		mockMvc.perform(get("/api/users/{id}", user.getUserid()))
//				.andExpect(status().isConflict())
//				.andDo(print());
//		verify(service).getByUserId(Mockito.anyString());
//	}
	
	@Test
	public void testGetLoginSuccess() throws Exception {
		when(service.loginById(Mockito.anyString(), Mockito.anyString())).
				thenReturn(userlist);
		mockMvc.perform(post("/api/users/"))
				.andExpect(status().isBadRequest())
				.andDo(print());
	}
	
}

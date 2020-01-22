package com.example.demo.service;
import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import java.util.Optional;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

import com.example.demo.dao.UserDAO;
import com.example.demo.model.User;


@RunWith(MockitoJUnitRunner.class)
public class UserServiceImplTest {

	@Mock
	private UserDAO userdao;
	@InjectMocks
	private UserServiceImpl service;
	User user;
	Optional<User> useropt;
	
	@Before
	public void setUp() throws Exception {
		user = new User();
		useropt = Optional.of(user);
	}
	@After
	public void tearDown() throws Exception {
	}
	
	@Test
	public void testAddUserSuccess() throws Exception {
		when(userdao.save(Mockito.any(User.class))).
					thenReturn(user);
		Boolean addedUser = service.createUser(user);
		verify(userdao).save(Mockito.any());
	}
}

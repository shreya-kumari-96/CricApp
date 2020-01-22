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

import com.example.demo.dao.FavouriteDAO;
import com.example.demo.model.Favourite;



@RunWith(MockitoJUnitRunner.class)
public class FavouriteServiceImplTest {

	@Mock
	private FavouriteDAO favdao;
	@InjectMocks
	private FavouriteServiceImpl service;
	Favourite favourite;
	Optional<Favourite> favopt;
	
	@Before
	public void setUp() throws Exception {
		favourite = new Favourite();
		favopt = Optional.of(favourite);
	}
	@After
	public void tearDown() throws Exception {
	}
	
	@Test
	public void testAddFavouriteSuccess() throws Exception {
		when(favdao.save(Mockito.any(Favourite.class))).
					thenReturn(favourite);
		Favourite addedFavourite = service.saveFav(favourite);
		assertEquals(favourite.getName(), addedFavourite.getName());
		verify(favdao).save(Mockito.any());
	}
}

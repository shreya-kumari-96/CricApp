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

import com.example.demo.dao.RecommendationDAO;
import com.example.demo.model.Recommendation;


@RunWith(MockitoJUnitRunner.class)
public class RecommendationServiceImplTest {

	@Mock
	private RecommendationDAO recdao;
	@InjectMocks
	private RecommendationServiceImpl service;
	Recommendation recommendation;
	Optional<Recommendation> recopt;
	
	@Before
	public void setUp() throws Exception {
		recommendation = new Recommendation();
		recopt = Optional.of(recommendation);
	}
	@After
	public void tearDown() throws Exception {
	}
	
	@Test
	public void testAddRecommendationSuccess() throws Exception {
		when(recdao.save(Mockito.any(Recommendation.class))).
					thenReturn(recommendation);
		Recommendation addedRecommendation = service.saveRec(recommendation);
		assertEquals(recommendation.getName(), addedRecommendation.getName());
		verify(recdao).save(Mockito.any());
	}
}

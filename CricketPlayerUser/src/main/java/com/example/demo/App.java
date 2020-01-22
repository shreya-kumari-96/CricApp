package com.example.demo;

import javax.servlet.Filter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.PropertySource;

import com.example.demo.jwtfilter.AuthFilter;


@SpringBootApplication
@PropertySource("classpath:dbconfig.properties")
public class App 
{
	@Bean
	public FilterRegistrationBean jwtFilter() {
		FilterRegistrationBean<Filter> bean = new FilterRegistrationBean<>();
		bean.setFilter(new AuthFilter());
		bean.addUrlPatterns("/api/cplayer/*");
		return bean;
	}
	
	public static void main(String[] args) {
		SpringApplication.run(App.class, args);
	}
}

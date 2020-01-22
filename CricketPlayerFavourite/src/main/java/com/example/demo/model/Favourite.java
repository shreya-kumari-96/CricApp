package com.example.demo.model;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "fav")
public class Favourite {
	
	private String userid;
	private int pid;
	private String name;
	private String country;
	
	public Favourite() {
		super();
	}
	public Favourite(String userid, int pid, String name, String country) {
		super();
		this.userid = userid;
		this.pid = pid;
		this.name = name;
		this.country = country;
	}
	
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	
	
}

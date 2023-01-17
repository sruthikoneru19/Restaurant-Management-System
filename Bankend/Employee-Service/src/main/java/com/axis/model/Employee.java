package com.axis.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Employees")
public class Employee {
	
	@Id
	private  int id;
	private String name;
	private int age;
	private String gender;
	private String job;
	private int  salary;
	private int phoneno;
	
	public Employee(String name, int age, String gender, int id, String job, int salary, int phoneno) {
		super();
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.id = id;
		this.job = job;
		this.salary = salary;
		this.phoneno = phoneno;
	}

	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

	public int getSalary() {
		return salary;
	}

	public void setSalary(int salary) {
		this.salary = salary;
	}

	public int getPhoneno() {
		return phoneno;
	}
    
	public void setPhoneno(int phoneno) {
		this.phoneno = phoneno;
	}


}

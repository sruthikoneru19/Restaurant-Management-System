package com.axis.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Item")
public class Item{
	

     @Id
     private int id;
     private float price;
     private String item_name;
     private int quantity;
     //private float totalPrice;
     public Item() {
	super();
	// TODO Auto-generated constructor stub
}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public String getItem_name() {
		return item_name;
	}
	public void setItem_name(String item_name) {
		this.item_name = item_name;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	public Item(int id, float price, String item_name, int quantity) {
		super();
		this.id = id;
		this.price = price;
		this.item_name = item_name;
		this.quantity = quantity;
		
	}
}


	
	
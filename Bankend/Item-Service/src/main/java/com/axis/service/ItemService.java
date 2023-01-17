package com.axis.service;

import java.util.List;

import com.axis.model.Item;

public interface ItemService {
	
	public Item addItem(Item item);
	public Item saveItem(Item item);
	public List<Item> getAllItems();
	public String deleteItem(int id);
	public Item updateItem(int id,Item item);
	public List<Item> getItemsById(int id);
	
	
	
	

}

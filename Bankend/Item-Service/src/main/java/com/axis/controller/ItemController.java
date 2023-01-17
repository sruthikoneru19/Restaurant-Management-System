package com.axis.controller;

import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.axis.model.Item;
import com.axis.service.ItemService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("api/v2")
public class ItemController {

	@Autowired
	ItemService itemService;
	
	@PostMapping("/addItem")
	public ResponseEntity<Item> add(@RequestBody Item item){
		Item item2 = itemService.addItem(item);
		return new ResponseEntity<Item>(item, HttpStatus.OK);
	}
	

	@PostMapping("/saveItem")
	public ResponseEntity<Item>saveItem(@RequestBody Item item){
		Item item2 = itemService.saveItem(item);
		return new ResponseEntity<Item>(item, HttpStatus.OK);
	}
	
	@GetMapping("/listAllItems")
	public ResponseEntity<List<Item>> getAllItems(){
		List<Item> items = itemService.getAllItems();
		return new ResponseEntity<List<Item>>(items, HttpStatus.OK);
	}
	
	@DeleteMapping("/itemDelete/{id}")
	public ResponseEntity<String> deleteItem(@PathVariable int id){
		return new ResponseEntity<String>(itemService.deleteItem(id),HttpStatus.OK);
	}
	
	@PutMapping("/itemUpdate/{id}")
	public ResponseEntity<Item> updateItem(@PathVariable int id,@RequestBody Item item){
		return new ResponseEntity<Item>(itemService.updateItem(id, item),HttpStatus.OK);
	}
    
}

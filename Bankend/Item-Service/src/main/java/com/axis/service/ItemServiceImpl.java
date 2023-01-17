package com.axis.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.exception.IDNotFoundException;
import com.axis.model.Item;
import com.axis.repository.ItemRepository;
import com.axis.utils.AppConstants;

@Service
public class ItemServiceImpl implements ItemService {
		
		@Autowired
		ItemRepository itemRepository;
		
		@Override
		public Item addItem(Item item) {
			return itemRepository.save(item);
		}
		
		
		@Override
		public Item saveItem(Item item) {
			return itemRepository.save(item);
		}

		
		@Override
		public List<Item> getAllItems() {
			return itemRepository.findAll();
		}

		
		@Override
		public String deleteItem(int id) {
			Item it=(Item) itemRepository.findById(id).orElseThrow(()-> new IDNotFoundException(AppConstants.ITEM_ID_NOT_FOUND_MESSAGE));
			itemRepository.delete((Item) it);
			return AppConstants.ITEM_DELETE_MESSAGE;
		}

		
		@Override
		public Item updateItem(int id,Item item) {
			Item it=(Item) itemRepository.findById(id).orElseThrow(()-> new IDNotFoundException(AppConstants.ITEM_ID_NOT_FOUND_MESSAGE));
			it.setId(item.getId());
			it.setItem_name(item.getItem_name());
			it.setPrice(item.getPrice());
			it.setQuantity(item.getQuantity());	
			
			return (Item) itemRepository.save((Item) it);
		}
		
		


	}



package com.axis.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.axis.model.Item;


public interface ItemRepository extends JpaRepository<Item, Integer>{

}
package com.linh.shop.service;

import java.util.List;


public interface BaseService<T> {

	public List<T> getAll();

	public void save(T object);

	public T getByID(Long id);

	public void deleteById(Long id) ;
    
}

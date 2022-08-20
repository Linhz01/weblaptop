package com.linh.shop.repository;

import com.linh.shop.model.Categories;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Categories, Long> {
    
}

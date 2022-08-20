package com.linh.shop.repository;

import com.linh.shop.model.Brands;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BrandRepository extends JpaRepository<Brands, Long> {
    
}

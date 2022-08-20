package com.linh.shop.repository;

import com.linh.shop.model.News;

import org.springframework.data.jpa.repository.JpaRepository;

public interface NewRepository extends JpaRepository<News, Long> {
    
}

package com.linh.shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.linh.shop.model.Contacts;

public interface ContactRepository extends JpaRepository<Contacts, Long>{
    
}

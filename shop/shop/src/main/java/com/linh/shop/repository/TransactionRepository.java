package com.linh.shop.repository;

import com.linh.shop.model.Transactions;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<Transactions, Long>{
    
}

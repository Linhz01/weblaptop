package com.linh.shop.repository;

import com.linh.shop.model.Transactions;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TransactionRepository extends JpaRepository<Transactions, Long>{
    
    @Query(value = "select * from shoplaptop.transactions p where p.userid = ?1", nativeQuery = true)
    List<Transactions> findByUsers(Long userid);
}

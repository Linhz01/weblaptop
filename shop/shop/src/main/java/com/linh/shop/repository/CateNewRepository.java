package com.linh.shop.repository;
import com.linh.shop.model.CateNews;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CateNewRepository extends JpaRepository<CateNews, Long> {
    
}

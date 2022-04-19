package com.linh.shop.repository;

import com.linh.shop.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Users, Long> {
    
}

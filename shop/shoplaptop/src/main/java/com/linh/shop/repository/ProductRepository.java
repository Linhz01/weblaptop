package com.linh.shop.repository;

import java.util.Optional;

import com.linh.shop.model.Products;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Products, Long>{
    void deleteProductById(Long id);

    Optional<Products> findProductById(Long id);
}

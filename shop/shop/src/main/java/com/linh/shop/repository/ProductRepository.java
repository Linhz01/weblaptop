package com.linh.shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import com.linh.shop.model.Products;

public interface ProductRepository extends JpaRepository<Products, Long> {
    void deleteProductById(Long id);

    Optional<Products> findProductById(Long id);
}

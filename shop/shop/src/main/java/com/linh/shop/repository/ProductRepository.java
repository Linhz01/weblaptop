package com.linh.shop.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;
import com.linh.shop.model.Products;

public interface ProductRepository extends JpaRepository<Products, Long> {
    void deleteProductById(Long id);
    Optional<Products> findProductById(Long id);

    @Query(value ="SELECT * FROM shoplaptop.products ORDER BY id DESC LIMIT 0, 3", nativeQuery = true)
    List<Products> fin10();

    @Query(value = "select * from shoplaptop.products p where p.brand_id = ?1", nativeQuery = true)
    List<Products> fListProductsByBrandID(Long brand_id);

}

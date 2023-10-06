package com.linh.shop.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;
import com.linh.shop.model.Products;
import com.linh.shop.model.Transactions;


public interface ProductRepository extends JpaRepository<Products, Long> {
    void deleteProductById(Long id);
    Optional<Products> findProductById(Long id);

    @Query(value ="SELECT * FROM shoplaptop.products ORDER BY id DESC LIMIT 0, 6", nativeQuery = true)
    List<Products> fin5();
    
    @Query(value ="SELECT * FROM shoplaptop.products ORDER BY id DESC LIMIT 0, 5", nativeQuery = true)
    List<Products> fin6();

    @Query(value = "select * from shoplaptop.products p where p.brand_id = ?1", nativeQuery = true)
    List<Products> fListProductsByBrandID(Long brand_id);

    @Query(value = "select * from shoplaptop.products p where p.category_id = ?1", nativeQuery = true)
    List<Products> fListProductsByCategoryID(Long category_id);

    @Query(value = "SELECT * from shoplaptop.products p WHERE p.price between ?1 and ?2", nativeQuery = true)
    List<Products>  find2530(Long minp, Long maxp);

    @Query(value = "SELECT sum(p.total) from shoplaptop.transactions p WHERE p.status like 'da giao'", nativeQuery = true)
    List<Transactions> turnoverProduct();

    

}

package com.linh.shop.repository;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.linh.shop.model.OrderProducts;
import com.linh.shop.model.Products;



public interface OrderReponsitory extends JpaRepository<OrderProducts, Long>{

    // @Query(value = "select q.productname, q.price from shoplaptop.order_products p, shoplaptop.products q where p.product_id = q.id and p.transaction_id = 5", nativeQuery = true)
    // List<Products> flistOrderbyTransaction(Long transaction_id);
}

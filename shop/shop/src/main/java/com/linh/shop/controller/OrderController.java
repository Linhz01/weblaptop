package com.linh.shop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.linh.shop.model.OrderProducts;
import com.linh.shop.model.Products;
import com.linh.shop.repository.OrderReponsitory;

@RestController
@RequestMapping("/order")
public class OrderController {
    @Autowired
    OrderReponsitory orderReponsitory;
    
    @GetMapping("/all")
    public ResponseEntity<List<OrderProducts>> getAllOrder() {
        List<OrderProducts> orders = orderReponsitory.findAll();
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<OrderProducts> addCategory(@RequestBody OrderProducts orders) {
        OrderProducts addOrders = orderReponsitory.save(orders);
        return new ResponseEntity<>(addOrders, HttpStatus.CREATED);
    }

    // @GetMapping("/all/transaction/{id}")
    // public ResponseEntity<List<Products>> getAllProductsByTransactionID(@PathVariable("id") Long id) {
    //     List<Products> products = orderReponsitory.flistOrderbyTransaction(id);
    //     return new ResponseEntity<>(products, HttpStatus.OK);
    // }

    

}

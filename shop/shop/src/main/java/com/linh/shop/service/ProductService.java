package com.linh.shop.service;

import java.util.List;
import javax.transaction.Transactional;
import com.linh.shop.exception.productEX;
import com.linh.shop.model.Products;
import com.linh.shop.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ProductService {
    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Products add(Products ticket) {
        return productRepository.save(ticket);
    }  

    public List<Products> findAll() {
        return productRepository.findAll();
    }

    public Products update(Products ticket) {
        return productRepository.save(ticket);
    }

    public Products findbyID(Long id) {
        return productRepository.findProductById(id)
                .orElseThrow(() -> new productEX("Name by id " + id + " was not found"));
    }

    public void delete(Long id){
        productRepository.deleteProductById(id);
    }
}


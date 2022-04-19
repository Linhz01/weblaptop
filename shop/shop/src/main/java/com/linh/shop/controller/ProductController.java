package com.linh.shop.controller;

import com.linh.shop.service.ProductService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.validation.Valid;

import com.linh.shop.exception.ResourceNotFoundException;
import com.linh.shop.model.Products;
import com.linh.shop.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/product")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    private final ProductService productService;
    
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Products>> getAllProducts() {
        List<Products> products = productService.findAll();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Products> getProductById(@PathVariable("id") Long id) 
        throws ResourceNotFoundException{
        Products products = productRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("Không tồn tại sản phẩm có id: " + id));
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Products> addProduct(@RequestBody Products products) {
        Products newTicket = productService.add(products);
        return new ResponseEntity<>(newTicket, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Products> updateProduct(@Valid @RequestBody @PathVariable("id") Products products, Long id) 
        throws ResourceNotFoundException{
            Products products2 = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Không tồn tại sản phẩm có id: " + id));
            
            final Products updateTicket = productRepository.save(products2);
            return new ResponseEntity<>(updateTicket, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public Map<String, Boolean> deleteProduct(@PathVariable("id") Long id) 
        throws ResourceNotFoundException{
            Products products = productRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Không tồn tại sản phẩm có id: " + id));

        productRepository.delete(products);
        Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
        
    }
}


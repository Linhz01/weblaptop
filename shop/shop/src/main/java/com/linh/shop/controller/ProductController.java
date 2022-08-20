package com.linh.shop.controller;

import com.linh.shop.service.ProductService;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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

    @GetMapping("/all/brand/{id}")
    public ResponseEntity<List<Products>> getAllProductsByBrand(@PathVariable("id") Long id) {
        List<Products> products = productRepository.fListProductsByBrandID(id);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Products> getProductById(@PathVariable("id") Long id){
		Optional<Products> productData = productRepository.findById(id);

		if (productData.isPresent()) {
			return new ResponseEntity<>(productData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

    @PostMapping("/add")
    public ResponseEntity<Products> createTutorial(@RequestBody Products tutorial) {
        try {
          Products _tutorial = productRepository
              .save(tutorial);
          return new ResponseEntity<>(_tutorial, HttpStatus.CREATED);
        } catch (Exception e) {
          return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }

      @PutMapping("/update")
      public ResponseEntity<Products> updateCategory(@RequestBody Products cate) {
          Products update = productRepository.save(cate);
          return new ResponseEntity<>(update, HttpStatus.OK);
      }

    @PutMapping("/update/{id}")
	public ResponseEntity<Products> updateTutorial(@PathVariable("id") long id, @RequestBody Products tutorial) {
		Optional<Products> productData = productRepository.findById(id);
        
		if (productData.isPresent()) {
			Products product = productData.get();
			return new ResponseEntity<>(productRepository.save(product), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
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


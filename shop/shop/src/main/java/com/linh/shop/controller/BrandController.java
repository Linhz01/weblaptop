package com.linh.shop.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.validation.Valid;
import com.linh.shop.exception.ResourceNotFoundException;
import com.linh.shop.model.Brands;
import com.linh.shop.repository.BrandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/brand")
public class BrandController {
    @Autowired
    public BrandRepository brandRepository;

    @GetMapping("/all")
    public ResponseEntity<List<Brands>> getAllBrands() {
        List<Brands> brands = brandRepository.findAll();
        return new ResponseEntity<>(brands, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Brands> getBrandById(@PathVariable("id") Long id) 
        throws ResourceNotFoundException{
        Brands brands = brandRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("Không tồn tại hãng có id: " + id));
        return new ResponseEntity<>(brands, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Brands> addBrand(@RequestBody Brands brands) {
        Brands newTicket = brandRepository.save(brands);
        return new ResponseEntity<>(newTicket, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Brands> updateBrand(@Valid @RequestBody @PathVariable("id") Brands brands, Long id) 
        throws ResourceNotFoundException{
            Brands brands2 = brandRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Không tồn tại hãng có id: " + id));
            
            final Brands updateTicket = brandRepository.save(brands2);
            return new ResponseEntity<>(updateTicket, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public Map<String, Boolean> deleteBrand(@PathVariable("id") Long id) 
        throws ResourceNotFoundException{
            Brands brands = brandRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Không tồn tại hãng có id: " + id));

        brandRepository.delete(brands);
        Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
        
    }
}
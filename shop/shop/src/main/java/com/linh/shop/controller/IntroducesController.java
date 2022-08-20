package com.linh.shop.controller;

import java.util.List;
import java.util.Map;
import java.util.HashMap;
import com.linh.shop.exception.ResourceNotFoundException;
import com.linh.shop.model.Introduces;
import com.linh.shop.repository.IntroducesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/introduces")
public class IntroducesController {
    @Autowired
    private IntroducesRepository introducesRepository;

    @GetMapping("/all")
    public ResponseEntity<List<Introduces>> getAllIntro() {
        List<Introduces> introduces = introducesRepository.findAll();
        return new ResponseEntity<>(introduces, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Introduces> updateIntroduces(@RequestBody Introduces cate) {
        Introduces update = introducesRepository.save(cate);
        return new ResponseEntity<>(update, HttpStatus.OK);
    }
    
    @DeleteMapping("/delete/{id}")
    public Map<String, Boolean> deleteCategory(@PathVariable("id") Integer id) 
        throws ResourceNotFoundException{
            Introduces introduces = introducesRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Không tồn tại sản phẩm có id: " + id));

        introducesRepository.delete(introduces);
        Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
        
    }
}

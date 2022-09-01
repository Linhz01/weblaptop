package com.linh.shop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.linh.shop.model.Users;
import com.linh.shop.repository.UserRepository;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    
    @GetMapping("/all")
    public ResponseEntity<List<Users>> getAllProducts() {
        List<Users> products = userRepository.findAll();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

}

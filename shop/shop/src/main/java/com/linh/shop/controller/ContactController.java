package com.linh.shop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.linh.shop.model.Contacts;
import com.linh.shop.repository.ContactRepository;
import com.linh.shop.service.ContactService;

@RestController
@RequestMapping("/contact")
public class ContactController {
    private ContactService contactService;
    
    @Autowired
    ContactRepository contactRepository;

    @GetMapping("/all")
    public ResponseEntity<List<Contacts>> getAll() {
        List<Contacts> introduces = contactRepository.findAll();
        return new ResponseEntity<>(introduces, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Contacts> add(@RequestBody Contacts news) {
        Contacts newC = contactRepository.save(news);
        return new ResponseEntity<>(newC, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Contacts> update(@RequestBody Contacts news) {
        Contacts updateC = contactRepository.save(news);
        return new ResponseEntity<>(updateC, HttpStatus.OK);
    }
}

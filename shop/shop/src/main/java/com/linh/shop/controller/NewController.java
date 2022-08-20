package com.linh.shop.controller;

import java.util.List;

import com.linh.shop.model.CateNews;
import com.linh.shop.model.News;
import com.linh.shop.repository.CateNewRepository;
import com.linh.shop.repository.NewRepository;

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
@RequestMapping("/new")
public class NewController {
    @Autowired
    NewRepository newRepository;

    @Autowired
    CateNewRepository cateNewRepository;

    @GetMapping("/all")
    public ResponseEntity<List<News>> getAllNews() {
        List<News> News = newRepository.findAll();
        return new ResponseEntity<>(News, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<News> addNew(@RequestBody News news) {
        News newNew = newRepository.save(news);
        return new ResponseEntity<>(newNew, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<News> updateNews(@RequestBody News news) {
        News updateNew = newRepository.save(news);
        return new ResponseEntity<>(updateNew, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteNew(@PathVariable("id") Long id) {
        newRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("category/all")
    public ResponseEntity<List<CateNews>> getAllCategoryNews() {
        List<CateNews> CateNews = cateNewRepository.findAll();
        return new ResponseEntity<>(CateNews, HttpStatus.OK);
    }

    @PostMapping("category/add")
    public ResponseEntity<CateNews> addCategory(@RequestBody CateNews news) {
        CateNews newNew = cateNewRepository.save(news);
        return new ResponseEntity<>(newNew, HttpStatus.CREATED);
    }

    @PutMapping("category/update")
    public ResponseEntity<CateNews> updateCategoryNews(@RequestBody CateNews news) {
        CateNews updateNew = cateNewRepository.save(news);
        return new ResponseEntity<>(updateNew, HttpStatus.OK);
    }

    @DeleteMapping("category/delete/{id}")
    public ResponseEntity<?> deleteCategoryNew(@PathVariable("id") Long id) {
        cateNewRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

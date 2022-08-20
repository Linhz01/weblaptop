package com.linh.shop.controller;

import java.util.List;
import java.util.Map;
import java.util.HashMap;
import com.linh.shop.exception.ResourceNotFoundException;
import com.linh.shop.model.Transactions;
import com.linh.shop.repository.CategoryRepository;
import com.linh.shop.repository.TransactionRepository;

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
@RequestMapping("/transaction")
public class TransactionController {
    @Autowired
    private TransactionRepository transactionRepository;

    @GetMapping("/all")
    public ResponseEntity<List<Transactions>> getAllTransactions() {
        List<Transactions> transactions = transactionRepository.findAll();
        return new ResponseEntity<>(transactions, HttpStatus.OK);
    }

    // @GetMapping("/find/{id}")
    // public ResponseEntity<Categories> getCategoryById(@PathVariable("id") Long id) 
    //     throws ResourceNotFoundException{
    //     Categories categories = categoryRepository.findById(id)
    //                 .orElseThrow(() -> new ResourceNotFoundException("Không tồn tại sản phẩm có id: " + id));
    //     return new ResponseEntity<>(categories, HttpStatus.OK);
    // }

    // @GetMapping("/find/{id}")
	// public ResponseEntity<Categories> getEmployeeById(@PathVariable(value = "id") Long cateID)
	// 		throws ResourceNotFoundException {
	// 	Categories category = categoryRepository.findById(cateID)
	// 			.orElseThrow(() -> new ResourceNotFoundException("Categories not found for this id :: " + cateID));
	// 	return ResponseEntity.ok().body(category);
	// }

    @PostMapping("/add")
    public ResponseEntity<Transactions> addCategory(@RequestBody Transactions transactions) {
        Transactions newTrans = transactionRepository.save(transactions);
        return new ResponseEntity<>(newTrans, HttpStatus.CREATED);
    }

    // @PutMapping("/update/{id}")
    // public ResponseEntity<Categories> updateCategory(@Valid @RequestBody @PathVariable(value = "id") Categories categories, Long id) 
    //     throws ResourceNotFoundException{
    //         Categories categories2 = categoryRepository.findById(id)
    //             .orElseThrow(() -> new ResourceNotFoundException("Không tồn tại sản phẩm có id: " + id));

    //         categories2.setCategoryname(categories.getCategoryname());      
    //         final Categories updateCategory = categoryRepository.save(categories2);
    //         return ResponseEntity.ok(updateCategory);
    // }

    @PutMapping("/update")
    public ResponseEntity<Transactions> updateCategory(@RequestBody Transactions gd) {
        Transactions update = transactionRepository.save(gd);
        return new ResponseEntity<>(update, HttpStatus.OK);
    }
    
    @DeleteMapping("/delete/{id}")
    public Map<String, Boolean> deleteCategory(@PathVariable("id") Long id) 
        throws ResourceNotFoundException{
            Transactions transactions = transactionRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Không tồn tại giao dịch có id: " + id));

        transactionRepository.delete(transactions);
        Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
        
    }
}

package com.linh.shop.model;

import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
public class Categories{
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	@Column(nullable = false, updatable = false)
	private Long id;

    @NotNull
    private String categoryname;
    
    // @OneToMany(mappedBy = "categories")
    // private List<Products> products;

    public Categories() {
    }

    public Categories(Long id, @NotNull String categoryname) {
        this.id = id;
        this.categoryname = categoryname;
        // this.products = products;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategoryname() {
        return categoryname;
    }

    public void setCategoryname(String categoryname) {
        this.categoryname = categoryname;
    }

    // public List<Products> getProducts() {
    //     return products;
    // }

    // public void setProducts(List<Products> products) {
    //     this.products = products;
    // }

    
}

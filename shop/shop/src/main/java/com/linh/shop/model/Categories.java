package com.linh.shop.model;

import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
public class Categories{
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	@Column(nullable = false)
	private Long id;

    @NotNull
    private String categoryname;
    
    @OneToMany(cascade = CascadeType.ALL)
    private Set<Products> products;

    public Set<Products> getProducts() {
        return products;
    }

    public void setProducts(Set<Products> products) {
        this.products = products;
    }

    public Categories() {
    }

    public Categories(Long id, @NotNull String categoryname) {
        this.id = id;
        this.categoryname = categoryname;
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
    
}

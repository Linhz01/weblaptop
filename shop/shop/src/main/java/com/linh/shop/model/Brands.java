package com.linh.shop.model;
import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
public class Brands{
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	@Column(nullable = false, updatable = false)
	private Long id;

    @NotNull(message = "Không được để trống trường này")
    private String name;

    @NotNull(message = "Không được để trống trường này")
    private String logo;

    // @OneToMany(mappedBy = "brands")
    // private List<Products> products;

    // public List<Products> getProducts() {
    //     return products;
    // }

    // public void setProducts(List<Products> products) {
    //     this.products = products;
    // }

    public Brands() {
    }

    public Brands(Long id, @NotNull(message = "Không được để trống trường này") String name,
            @NotNull(message = "Không được để trống trường này") String logo) {
        this.id = id;
        this.name = name;
        this.logo = logo;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }


    @Override
    public String toString() {
        return "Brands [id=" + id + ", logo=" + logo + ", name=" + name + ",]";
    }

    
}

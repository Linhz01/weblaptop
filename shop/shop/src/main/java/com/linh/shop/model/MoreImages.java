package com.linh.shop.model;
import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
public class MoreImages {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotNull(message = "Không được để trống")
    private String nameImage;

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Products products;

    public MoreImages() {
    }

    public MoreImages(Long id, @NotNull(message = "Không được để trống") String nameImage, Products products) {
        this.id = id;
        this.nameImage = nameImage;
        this.products = products;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNameImage() {
        return nameImage;
    }

    public void setNameImage(String nameImage) {
        this.nameImage = nameImage;
    }

    public Products getProducts() {
        return products;
    }

    public void setProducts(Products products) {
        this.products = products;
    }

    @Override
    public String toString() {
        return "MoreImages [id=" + id + ", nameImage=" + nameImage + ", products=" + products + "]";
    }

    
}

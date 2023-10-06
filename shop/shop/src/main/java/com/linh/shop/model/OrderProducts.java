package com.linh.shop.model;
import javax.persistence.*;

@Entity
public class OrderProducts {
    @EmbeddedId
    private CompositeKey id;

    @ManyToOne
    @MapsId("user_id")
    @JoinColumn(name = "user_id")
    private Users users;

    @ManyToOne
    @MapsId("product_id")
    @JoinColumn(name = "product_id")
    private Products products;

    private int amount;
    private int price;
    private String status;

    
    public OrderProducts() {
    }

    public OrderProducts(CompositeKey id, Users users, Products products, int amount, int price, String status) {
        this.id = id;
        this.users = users;
        this.products = products;
        this.amount = amount;
        this.price = price;
        this.status = status;
    }

    public CompositeKey getId() {
        return id;
    }


    public void setId(CompositeKey id) {
        this.id = id;
    }

    public Products getProducts() {
        return products;
    }


    public void setProducts(Products products) {
        this.products = products;
    }


    public int getAmount() {
        return amount;
    }


    public void setAmount(int amount) {
        this.amount = amount;
    }


    public int getPrice() {
        return price;
    }


    public void setPrice(int price) {
        this.price = price;
    }


    public String getStatus() {
        return status;
    }


    public void setStatus(String status) {
        this.status = status;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    
    
}

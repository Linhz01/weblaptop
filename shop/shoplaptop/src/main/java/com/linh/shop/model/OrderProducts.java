package com.linh.shop.model;
import javax.persistence.*;

@Entity
public class OrderProducts {
    @EmbeddedId
    private CompositeKey id;

    @ManyToOne
    @MapsId("transaction_id")
    @JoinColumn(name = "transaction_id")
    private Transactions transactions;

    @ManyToOne
    @MapsId("product_id")
    @JoinColumn(name = "product_id")
    private Products products;

    private int amount;
    private int price;
    private String status;

    
    public OrderProducts() {
    }


    public OrderProducts(CompositeKey id, Transactions transactions, Products products, int amount, int price,
            String status) {
        this.id = id;
        this.transactions = transactions;
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


    public Transactions getTransactions() {
        return transactions;
    }


    public void setTransactions(Transactions transactions) {
        this.transactions = transactions;
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

    
}

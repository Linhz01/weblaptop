package com.linh.shop.model;

import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
public class CateNews{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    
    @NotNull
    @Column(name = "name")
    private String namecate;
    

    public CateNews() {
    }

    public CateNews(Long id, @NotNull String namecate) {
        this.id = id;
        this.namecate = namecate;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return namecate;
    }

    public void setName(String namecate) {
        this.namecate = namecate;
    }

    
}

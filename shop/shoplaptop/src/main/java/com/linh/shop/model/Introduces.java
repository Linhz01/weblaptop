package com.linh.shop.model;

import java.io.Serializable;
import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
public class Introduces implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @NotNull(message = "Không được rỗng")
    private String content;
    
    @ManyToOne
    @JoinColumn(name = "admim_id", nullable = false)
    private Admins admins;

    public Introduces(int id, @NotNull(message = "Không được rỗng") String content, Admins admins) {
        this.id = id;
        this.content = content;
        this.admins = admins;
    }

    public Introduces() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Admins getAdmins() {
        return admins;
    }

    public void setAdmins(Admins admins) {
        this.admins = admins;
    }

    
}

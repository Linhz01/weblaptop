package com.linh.shop.model;

// import java.io.Serializable;
import javax.persistence.*;
import javax.validation.constraints.*;
@Entity

public class Introduces{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @NotNull(message = "Không được rỗng")
    private String content;
    

    public Introduces(int id, @NotNull(message = "Không được rỗng") String content) {
        this.id = id;
        this.content = content;
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
}

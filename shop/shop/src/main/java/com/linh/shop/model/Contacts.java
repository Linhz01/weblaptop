package com.linh.shop.model;

import java.util.Date;

// import java.io.Serializable;
import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
public class Contacts{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @NotNull(message = "Không được để trống trường này")
    private String name;

    @NotNull(message = "Không được để trống trường này")
    private String email;

    @NotNull(message = "Không được để trống trường này")
    private int phone;

    @NotNull(message = "Không được để trống trường này")
    private String content;

    private String fileURL;

    private String timesend;

    private String status;

    public Contacts() {
    }

    public Contacts(int id, @NotNull(message = "Không được để trống trường này") String name,
            @NotNull(message = "Không được để trống trường này") String email,
            @NotNull(message = "Không được để trống trường này") int phone,
            @NotNull(message = "Không được để trống trường này") String content, String fileURL, String timesend, String status) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.content = content;
        this.fileURL = fileURL;
        this.timesend = timesend;
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getFileURL() {
        return fileURL;
    }

    public void setFileURL(String fileURL) {
        this.fileURL = fileURL;
    }


    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getTimesend() {
        return timesend;
    }

    public void setTimesend(String timesend) {
        this.timesend = timesend;
    }


   
}

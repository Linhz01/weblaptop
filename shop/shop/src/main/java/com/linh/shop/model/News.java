package com.linh.shop.model;
import java.io.Serializable;
import java.util.Date;

import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
public class News implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @NotNull(message = "Không được để trống")
    private String title;

    @NotNull(message = "Không được để trống")
    private String description;

    @NotNull(message = "Không được để trống")
    @Temporal(TemporalType.TIMESTAMP)
    private Date datetime;

    @NotNull(message = "Không được để trống")
    private String content;
    
    @ManyToOne
    @JoinColumn(name = "catenews_id", nullable = false)
    private CateNews catenews;

    @ManyToOne
    @JoinColumn(name = "admin_id", nullable = false)
    private Admins admins;

    public News() {
    }

    public News(int id, @NotNull(message = "Không được để trống") String title,
            @NotNull(message = "Không được để trống") String description,
            @NotNull(message = "Không được để trống") Date datetime,
            @NotNull(message = "Không được để trống") String content, CateNews catenews, Admins admins) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.datetime = datetime;
        this.content = content;
        this.catenews = catenews;
        this.admins = admins;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getDatetime() {
        return datetime;
    }

    public void setDatetime(Date datetime) {
        this.datetime = datetime;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public CateNews getCatenews() {
        return catenews;
    }

    public void setCatenews(CateNews catenews) {
        this.catenews = catenews;
    }

    public Admins getAdmins() {
        return admins;
    }

    public void setAdmins(Admins admins) {
        this.admins = admins;
    }

    
}

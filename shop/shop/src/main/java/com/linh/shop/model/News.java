package com.linh.shop.model;
// import java.io.Serializable;
import java.util.Date;

import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
public class News{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotNull(message = "Không được để trống")
    private String title;

    @NotNull(message = "Không được để trống")
    private String description;

    @NotNull(message = "Không được để trống")
    @Temporal(TemporalType.TIMESTAMP)
    private Date datetime;

    @NotNull(message = "Không được để trống")
    private String images;

    @NotNull(message = "Không được để trống")
    private String content;
    
    @ManyToOne
    @JoinColumn(name = "catenews_id", nullable = false)
    private CateNews catenews;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private Users users;

    public News() {
    }

    

    public News(Long id, @NotNull(message = "Không được để trống") String title,
            @NotNull(message = "Không được để trống") String description,
            @NotNull(message = "Không được để trống") Date datetime,
            @NotNull(message = "Không được để trống") String images,
            @NotNull(message = "Không được để trống") String content, CateNews catenews, Users users) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.datetime = datetime;
        this.images = images;
        this.content = content;
        this.catenews = catenews;
        this.users = users;
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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


    public String getImages() {
        return images;
    }


    public void setImages(String images) {
        this.images = images;
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

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    
}

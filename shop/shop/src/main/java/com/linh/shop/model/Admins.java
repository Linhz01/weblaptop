package com.linh.shop.model;

import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
public class Admins{
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	@Column(nullable = false, updatable = false)
	private Long id;

    @NotNull(message = "Không được để trống")
    @NotBlank(message = "Tài khoản không hợp lệ")
    private String username;

    @NotNull(message = "Không được để trống")
    @NotBlank(message = "Mật khẩu không hợp lệ")
    private String password;

    @NotNull
    @Column(length = 50)
    private String fullname;

    @NotNull
    private String email;

    private String introduction;

    @OneToMany(mappedBy = "admins")
    private List<News> news;

    
    @OneToMany(mappedBy = "admins")
    private List<Introduces> introduces;


    public Admins() {
    }


    public Admins(Long id,
            @NotNull(message = "Không được để trống") @NotBlank(message = "Tài khoản không hợp lệ") String username,
            @NotNull(message = "Không được để trống") @NotBlank(message = "Mật khẩu không hợp lệ") String password,
            @NotNull String fullname, @NotNull String email, String introduction, List<News> news,
            List<Introduces> introduces) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.fullname = fullname;
        this.email = email;
        this.introduction = introduction;
        this.news = news;
        this.introduces = introduces;
    }


    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }


    public String getUsername() {
        return username;
    }


    public void setUsername(String username) {
        this.username = username;
    }


    public String getPassword() {
        return password;
    }


    public void setPassword(String password) {
        this.password = password;
    }


    public String getFullname() {
        return fullname;
    }


    public void setFullname(String fullname) {
        this.fullname = fullname;
    }


    public String getEmail() {
        return email;
    }


    public void setEmail(String email) {
        this.email = email;
    }


    public String getIntroduction() {
        return introduction;
    }


    public void setIntroduction(String introduction) {
        this.introduction = introduction;
    }


    public List<News> getNews() {
        return news;
    }


    public void setNews(List<News> news) {
        this.news = news;
    }


    public List<Introduces> getIntroduces() {
        return introduces;
    }


    public void setIntroduces(List<Introduces> introduces) {
        this.introduces = introduces;
    }


    @Override
    public String toString() {
        return "Admins [email=" + email + ", fullname=" + fullname + ", id=" + id + ", introduces=" + introduces
                + ", introduction=" + introduction + ", news=" + news + ", password=" + password + ", username="
                + username + "]";
    }
    
    
}

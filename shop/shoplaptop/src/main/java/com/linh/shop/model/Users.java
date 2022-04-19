package com.linh.shop.model;

//import java.io.Serializable;
import java.util.List;
import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
public class Users{
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	@Column(nullable = false, updatable = false)
	private Long id;

    @NotNull
    private String name;

    @Column(unique = true)
    @NotNull(message = "Email không được rỗng")
    @Email(message = "Email không hợp lệ")
    private String email;

    @NotNull
    @Size(min = 6, message="Mật khẩu phải trên 6 ký tự")
    @NotBlank(message = "Mật khẩu không hợp lệ")
    private String password;

    private int phone;

    private String address;

    @NotNull
    private boolean status;
    
    @OneToMany(mappedBy = "users")
    private List<Comments> comments;

    @OneToMany(mappedBy = "users")
    private List<Contacts> contacts;

    @OneToMany(mappedBy = "users")
    private List<Transactions> transactions;

    public Users() {
    }

    public Users(Long id, @NotNull String name,
            @NotNull(message = "Email không được rỗng") @Email(message = "Email không hợp lệ") String email,
            @NotNull @Size(min = 6, message = "Mật khẩu phải trên 6 ký tự") @NotBlank(message = "Mật khẩu không hợp lệ") String password,
            int phone, String address, @NotNull boolean status, List<Comments> comments, List<Contacts> contacts,
            List<Transactions> transactions) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.address = address;
        this.status = status;
        this.comments = comments;
        this.contacts = contacts;
        this.transactions = transactions;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public List<Comments> getComments() {
        return comments;
    }

    public void setComments(List<Comments> comments) {
        this.comments = comments;
    }

    public List<Contacts> getContacts() {
        return contacts;
    }

    public void setContacts(List<Contacts> contacts) {
        this.contacts = contacts;
    }

    public List<Transactions> getTransactions() {
        return transactions;
    }

    public void setTransactions(List<Transactions> transactions) {
        this.transactions = transactions;
    }

    
}

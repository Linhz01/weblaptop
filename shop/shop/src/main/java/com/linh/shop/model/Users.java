package com.linh.shop.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
@Table(name = "users", 
    uniqueConstraints = { 
      @UniqueConstraint(columnNames = "username"),
      @UniqueConstraint(columnNames = "email") 
    })
public class Users{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(unique = true)
    @NotNull(message = "Không được để trống")
    @NotBlank
    private String username;

    @Column(unique = true)
    @NotNull(message = "Email không được rỗng")
    @Email(message = "Email không hợp lệ")
    private String email;

    @NotNull
    private String name;
    
    private String address;

    private int phone;

    @NotBlank
    @Size(max = 120)
    private String password;


    private boolean status;
    
    // @OneToMany(mappedBy = "users")
    // private List<Comments> comments;

    // @OneToMany(mappedBy = "users")
    // private List<Contacts> contacts;

    // @OneToMany(mappedBy = "users")
    // private List<Transactions> transactions;
    
    @ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(	name = "user_roles", 
				joinColumns = @JoinColumn(name = "user_id"), 
				inverseJoinColumns = @JoinColumn(name = "role_id"))
	private Set<Role> roles = new HashSet<>();
    
    public Users() {
    }

    // public Users(@NotNull String name,
    //         @NotNull(message = "Email không được rỗng") @Email(message = "Email không hợp lệ") String email,
    //         @NotNull(message = "Không được để trống") @NotBlank String username,
    //         @NotNull @Size(min = 6, message = "Mật khẩu phải trên 6 ký tự") @NotBlank(message = "Mật khẩu không hợp lệ") String password,
    //         int phone, String address
    //         // @NotNull boolean status
    //         )
    //         //  List<Comments> comments, List<Contacts> contacts,
    //         // List<Transactions> transactions)
    //          {
    //     this.name = name;
    //     this.email = email;
    //     this.username = username;
    //     this.password = password;
    //     this.phone = phone;
    //     this.address = address;
    //     // this.status = status;
    //     // this.comments = comments;
    //     // this.contacts = contacts;
    //     // this.transactions = transactions;
    // }
    
    
    public Users(@NotNull(message = "Không được để trống") @NotBlank String username,
    @NotNull(message = "Email không được rỗng") @Email(message = "Email không hợp lệ") String email,
    @NotNull String name, String address, int phone, @NotBlank @Size(max = 120) String password) {
        this.username = username;
        this.email = email;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.password = password;
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



    // public List<Comments> getComments() {
    //     return comments;
    // }



    // public void setComments(List<Comments> comments) {
    //     this.comments = comments;
    // }



    // public List<Contacts> getContacts() {
    //     return contacts;
    // }



    // public void setContacts(List<Contacts> contacts) {
    //     this.contacts = contacts;
    // }



    // public List<Transactions> getTransactions() {
    //     return transactions;
    // }



    // public void setTransactions(List<Transactions> transactions) {
    //     this.transactions = transactions;
    // }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    



    
}

package com.linh.shop.model;
import java.util.HashSet;
import java.util.Set;

// import java.io.Serializable;
import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
public class Transactions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    
    @NotNull(message = "Không được để trống")
    private String fullname;

    @NotNull(message = "Không được để trống")
    private int phone;

    @NotNull(message = "Không được để trống")
    @Email(message = "Email không hợp lệ")
    private String email;

    @NotNull(message = "Không được để trống")
    private String address;

    private String datetimeput;

    private String datetime;

    private String datetimein;

    private int total;

    private String status;

    private String note;

    private String userid;

    public Transactions() {
    }

    

    public Transactions(int id, @NotNull(message = "Không được để trống") String fullname,
            @NotNull(message = "Không được để trống") int phone,
            @NotNull(message = "Không được để trống") @Email(message = "Email không hợp lệ") String email,
            @NotNull(message = "Không được để trống") String address, String datetimeput, String datetime,
            String datetimein, int total, String status, String note, String userid) {
        this.id = id;
        this.fullname = fullname;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.datetimeput = datetimeput;
        this.datetime = datetime;
        this.datetimein = datetimein;
        this.total = total;
        this.status = status;
        this.note = note;
        this.userid = userid;
    }



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDatetime() {
        return datetime;
    }
    
    public void setDatetime(String datetime) {
        this.datetime = datetime;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public String getDatetimeput() {
        return datetimeput;
    }

    public void setDatetimeput(String datetimeput) {
        this.datetimeput = datetimeput;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getDatetimein() {
        return datetimein;
    }



    public void setDatetimein(String datetimein) {
        this.datetimein = datetimein;
    }

    
    
}

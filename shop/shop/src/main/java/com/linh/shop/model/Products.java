package com.linh.shop.model;
import java.io.Serializable;
import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.*;


@Entity
public class Products implements Serializable{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(nullable = false, updatable = false)
	private Long id;
    
    @Column(unique = true)
    @NotBlank
    @NotNull(message = "Không được để trống")
    private String productname;

    @NotNull(message = "Không được để trống")   
    private int price;

    @NotNull(message = "Không được để trống")
    private String cpu;

    @NotNull(message = "Không được để trống")
    private String harddrive;

    private String ram;

    private String feature;

    private String microprocessor;

    private int sonhan;

    private int soluong;

    private String capacity;

    @NotNull(message = "Không được để trống")
    private String information;

    @NotNull(message = "Không được để trống")
    private String imageproduct;

    @OneToMany(mappedBy = "products")
    private List<Comments> comments;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Categories categories;

    @ManyToOne
    @JoinColumn(name = "brand_id")
    private Brands brands;

    public Products() {
    }

    public Products(Long id, @NotNull(message = "Không được để trống") String productname,
            @NotNull(message = "Không được để trống") int price, @NotNull(message = "Không được để trống") String cpu,
            @NotNull(message = "Không được để trống") String harddrive, String ram, String feature,
            String microprocessor, int sonhan, int soluong, String capacity,
            @NotNull(message = "Không được để trống") String information,
            @NotNull(message = "Không được để trống") String imageproduct, List<Comments> comments,
            Categories categories, Brands brands) {
        this.id = id;
        this.productname = productname;
        this.price = price;
        this.cpu = cpu;
        this.harddrive = harddrive;
        this.ram = ram;
        this.feature = feature;
        this.microprocessor = microprocessor;
        this.sonhan = sonhan;
        this.soluong = soluong;
        this.capacity = capacity;
        this.information = information;
        this.imageproduct = imageproduct;
        this.comments = comments;
        this.categories = categories;
        this.brands = brands;
    }

    public Long getId() {
        return id;
    }



    public void setId(Long id) {
        this.id = id;
    }



    public String getProductname() {
        return productname;
    }



    public void setProductname(String productname) {
        this.productname = productname;
    }



    public int getPrice() {
        return price;
    }



    public void setPrice(int price) {
        this.price = price;
    }



    public String getCpu() {
        return cpu;
    }



    public void setCpu(String cpu) {
        this.cpu = cpu;
    }



    public String getHarddrive() {
        return harddrive;
    }



    public void setHarddrive(String harddrive) {
        this.harddrive = harddrive;
    }



    public String getRam() {
        return ram;
    }



    public void setRam(String ram) {
        this.ram = ram;
    }



    public String getFeature() {
        return feature;
    }



    public void setFeature(String feature) {
        this.feature = feature;
    }



    public String getMicroprocessor() {
        return microprocessor;
    }



    public void setMicroprocessor(String microprocessor) {
        this.microprocessor = microprocessor;
    }



    public int getSonhan() {
        return sonhan;
    }



    public void setSonhan(int sonhan) {
        this.sonhan = sonhan;
    }



    public int getSoluong() {
        return soluong;
    }



    public void setSoluong(int soluong) {
        this.soluong = soluong;
    }



    public String getCapacity() {
        return capacity;
    }



    public void setCapacity(String capacity) {
        this.capacity = capacity;
    }



    public String getInformation() {
        return information;
    }



    public void setInformation(String information) {
        this.information = information;
    }



    public String getImageproduct() {
        return imageproduct;
    }



    public void setImageproduct(String imageproduct) {
        this.imageproduct = imageproduct;
    }



    public List<Comments> getComments() {
        return comments;
    }



    public void setComments(List<Comments> comments) {
        this.comments = comments;
    }



    public Categories getCategories() {
        return categories;
    }



    public void setCategories(Categories categories) {
        this.categories = categories;
    }



    public Brands getBrands() {
        return brands;
    }



    public void setBrands(Brands brands) {
        this.brands = brands;
    }

    @Override
    public String toString() {
        return "Products [brands=" + brands + ", capacity=" + capacity + ", categories=" + categories + ", comments="
                + comments + ", cpu=" + cpu + ", feature=" + feature + ", harddrive=" + harddrive + ", id=" + id
                + ", imageproduct=" + imageproduct + ", information=" + information + ", microprocessor="
                + microprocessor + ", price=" + price + ", productname=" + productname + ", ram=" + ram + ", soluong="
                + soluong + ", sonhan=" + sonhan + "]";
    }

    
    
}

// package com.linh.shop.model;
// // import java.io.Serializable;
// import java.util.Date;

// import javax.persistence.*;
// import javax.validation.constraints.*;

// @Entity
// public class MoreImages {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     @Column(name = "id")
//     private Long id;

//     @NotNull(message = "Không được để trống")
//     private String title;

//     @ManyToOne
//     @JoinColumn(name = "product_id", nullable = false)
//     private Products products;
// }

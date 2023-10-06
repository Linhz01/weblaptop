package com.linh.shop.model;

import java.io.Serializable;
import javax.persistence.*;

@Embeddable
public class CompositeKey implements Serializable{

    @Column(name = "user_id")
    int transactionId;

    @Column(name = "product_id")
    int productId;
    
}

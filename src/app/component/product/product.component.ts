import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/model/products';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title = 'product';
  public products: Products[]; 
  constructor(private productService: ProductServiceService, private router: Router) { }

  ngOnInit(): void {
  this.getProduct();
  }
  
  public getProduct(): void {
    this.productService.getProduct().subscribe(
      (response: Products[]) => {
        this.products = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  productDetails(id: number){
    this.router.navigate(['details', id]);
  }
}

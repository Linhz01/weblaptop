import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brands } from 'src/app/model/brands';
import { Categories } from 'src/app/model/categories';
import { Products } from 'src/app/model/products';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  
  public products: Products[]; 

  @Input() currentProduct: Products = {
    id: 0,
    productname: '',
    price: 0,
    cpu: '',
    harddrive: '',
    ram: '',
    feature: '',
    microprocessor: '',
    sonhan: 0,
    soluong: 0,
    capacity: '',
    information: '',
    imageproduct: '',
    categories: new Categories,
    brands: new Brands,
    
    
  };


  message = '';
  p: number = 1;
  searchp: any;

  constructor(
    private productService: ProductServiceService, 
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getProductByBrandID(this.route.snapshot.params["id"]);
    
  }

  getProductByBrandID(brandID: string): void {
    this.productService.getProductByBrandID(brandID)
      .subscribe({
        next: (data) => {
          this.currentProduct = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
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
}

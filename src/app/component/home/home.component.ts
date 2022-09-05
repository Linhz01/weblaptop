import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/products';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Products[];
  constructor(
    private productService: ProductServiceService
  ) { }

  ngOnInit(): void {
    this.get5Product();
  }

  public get5Product(): void {
        this.productService.get5ProductNew().subscribe(
          (response: Products[]) => {
            this.products = response;
            this.products .forEach((a:any) =>
            {
               Object.assign(a,{quantity:1,total:a.price});
             });
            },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );
      }
  }


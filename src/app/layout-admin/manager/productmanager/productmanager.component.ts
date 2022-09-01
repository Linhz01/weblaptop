import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Brands } from 'src/app/model/brands';
import { Categories } from 'src/app/model/categories';
import { Products } from 'src/app/model/products';
import { BrandServiceService } from 'src/app/service/brand-service.service';
import { CategoryServiceService } from 'src/app/service/category-service.service';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-productmanager',
  templateUrl: './productmanager.component.html',
  styleUrls: ['./productmanager.component.css']
})
export class ProductmanagerComponent implements OnInit {
  
  p: number = 1;
  public products: Products[];
  public brand: Brands[];
  public category: Categories[];
  public editProducts: Products;
  public deleteProducts: Products;
  constructor(private productService: ProductServiceService, private router: Router,
              private categoryService: CategoryServiceService,
              private brandService: BrandServiceService,
    ) { }

  ngOnInit(): void {
    this.getProduct();
    this.getCategory();
    this.getBrand();
  
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

  public getCategory(): void {
    this.categoryService.getCategory().subscribe(
      (response: Categories[]) => {
        this.category = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getBrand(): void {
    this.brandService.getBrand().subscribe(
      (response: Brands[]) => {
        this.brand = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddProduct(addForm: NgForm): void {
    this.productService.addProduct(addForm.value).subscribe(
      (response: Products) => {
        console.log(response);
        this.getProduct();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        
      }
    );
  }

  public onUpdateProduct(product: Products): void {
    this.productService.updateProduct(product).subscribe(
      (response: Products) => {
        console.log(response);
        this.getProduct();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteProduct(productId: number): void {
    this.productService.deleteProduct(productId).subscribe(
      (response: void) => {
        console.log(response);
        this.getProduct();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchProduct(key: string): void {
    console.log(key);
    const results: Products[] = [];
    for (const product of this.products) {
      if (product.productname.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(product);
      }
    }
    this.products = results;
    if (results.length === 0 || !key) {
      this.getProduct();
    }
  }

  public onOpenModalEdit(product: Products, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addProductModal');
    }
    if (mode === 'edit') {
      this.editProducts = product;
      button.setAttribute('data-target', '#updateProductModal');
    }
    if (mode === 'delete') {
      this.deleteProducts = product;
      button.setAttribute('data-target', '#deleteProductModal');
    }
    container.appendChild(button);
    button.click();
    
  }

}

import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brands } from 'src/app/model/brands';
import { Categories } from 'src/app/model/categories';
import { Products } from 'src/app/model/products';
import { BrandServiceService } from 'src/app/service/brand-service.service';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { CategoryServiceService } from 'src/app/service/category-service.service';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentTutorial: Products = {
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
  title = 'product';
  public category: Categories[];
  public brand: Brands[];
  public products: Products[];
  
  constructor(private productService: ProductServiceService, 
              private cate: CategoryServiceService,
              private brands: BrandServiceService,
              private cartService: CartServiceService,
              private router: Router,
              private route: ActivatedRoute,) { }

  ngOnInit(): void {
  this.getProduct();
  this.getCategory();
  this.getBrand();

  
  }
    // Category
    public getCategory(): void {

      this.cate.getCategory().subscribe(
        (response: Categories[]) => {
          this.category = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

    // Category
    public getBrand(): void {

      this.brands.getBrand().subscribe(
        (response: Brands[]) => {
          this.brand = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }

  public getProduct(): void {
    
    this.productService.getProduct().subscribe(
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

  public getProductByBrandID(brandID: string): void {
    
    this.productService.getProductByBrandID(brandID).subscribe(
      (response: Products[]) => {
        this.products = response;
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

  productDetails(id: number){
    this.router.navigate(['home/details', id]);
  }

  getProductsByCate(id: number){
    this.router.navigate(['details', id]);
  }

  public addtocart(product: Products){
    this.cartService.addtoCart(product);
    window.alert('Thêm vào giỏ hàng thành công!');
  }
}

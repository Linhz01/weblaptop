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
import { HotToastService } from '@ngneat/hot-toast';


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
  currentCategoryID: number;
  currentBrandID: number;
  minPrice: number;
  maxPrice: number;
  get1: any;

  
  constructor(private productService: ProductServiceService, 
              private cate: CategoryServiceService,
              private brands: BrandServiceService,
              private cartService: CartServiceService,
              private router: Router,
              private route: ActivatedRoute,
              private toastService: HotToastService,
              ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getProduct;
    });
    this.getProduct();
    this.getCategory();
    this.getBrand();
    console.log(this.products.slice(0,1));
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
    const hasCategoryID: boolean = this.route.snapshot.paramMap.has('id');
    const hasBrandID: boolean = this.route.snapshot.paramMap.has('bid');
    const hasMin: boolean = this.route.snapshot.paramMap.has('min');
    const hasMax: boolean = this.route.snapshot.paramMap.has('max');
    // if (hasBrandID && hasCategoryID){
    //   this.currentCategoryID = +this.route.snapshot.paramMap.get('id');
    //   this.currentBrandID = +this.route.snapshot.paramMap.get('bid');
    //   this.productService.getProductByCategoryID(this.currentCategoryID).subscribe(
    //     data => {
    //       this.products = data;
    //     }
    //   )
    //   this.productService.getProductByBrandID(this.currentBrandID).subscribe(
    //     data => {
    //       this.products = data;
    //     }
    //   )
    // }
    if (hasCategoryID) {
      this.currentCategoryID = +this.route.snapshot.paramMap.get('id');
      this.productService.getProductByCategoryID(this.currentCategoryID).subscribe(
        data => {
          this.products = data;
          this.get1 = this.products.slice(0, 1)
        }
      
      )
    }
    else{
      if (hasBrandID) {
        this.currentBrandID = +this.route.snapshot.paramMap.get('bid');
        this.productService.getProductByBrandID(this.currentBrandID).subscribe(
          data => {
            this.products = data;
            this.get1 = this.products.slice(0, 1)
          }
        )
      }
      else {
        if (hasMin && hasMax){
          this.minPrice = +this.route.snapshot.paramMap.get('min');
          this.maxPrice = +this.route.snapshot.paramMap.get('max');
          this.productService.getProductByPrice(this.minPrice, this.maxPrice).subscribe(
            data => {
              this.products = data
              this.get1 = this.products.slice(0, 1)
            }
          )
        }
        else {
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
        }
    }

  }
  

  public getProductByBrandID(brandID: number): void {
    
    this.productService.getProductByBrandID(brandID).subscribe(
      (response: Products[]) => {
        this.products = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  isHomeRoute() {
    return this.router.url === '/home/products';
  }

  isSearchRoute(){
    return this.router.url === '/home/category/1';
  }

  isSearchBrandRoute(){
    return this.router.url === '/home/brand/1';
  }

  isSearchPriceRoute(){
    return this.router.url === '/home/price/15000000/20000000';
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
      this.showToastNotFound();
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
    this.showToast();
  }

  showToast() {
    this.toastService.success('Thêm vào giỏ hàng thành công!')
  }

  showToastNotFound(){
    this.toastService.error('Không tìm thấy sản phẩm!')
  }

}

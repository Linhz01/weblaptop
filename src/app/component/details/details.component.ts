import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brands } from 'src/app/model/brands';
import { Categories } from 'src/app/model/categories';
import { Products } from 'src/app/model/products';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { CategoryServiceService } from 'src/app/service/category-service.service';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() viewMode = false;

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
    categories: new Categories(),
    brands: new Brands,
    
  };


  message = '';
  public category: Categories[];
  public products: Products[];
  public brands: Brands[];
  categories: any;
  

  constructor(
    private productService: ProductServiceService,
    private cate: CategoryServiceService,
    private route: ActivatedRoute,
    private cartService: CartServiceService,
    private router: Router) { }

    ngOnInit(): void {
      this.categories = this.cate.getCategory();
      if (!this.viewMode) {
        this.message = '';
        this.getProductID(this.route.snapshot.params["id"]
        );
      }

    }
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

    getProductID(id: string): void {
      this.productService.getProductByID(id)
        .subscribe({
          
          next: (data) => {
            this.currentProduct = data;
            console.log(data);
          },
          error: (e) => console.error(e)
        });
    }

    public addtocart(product: Products){
      this.cartService.addtoCart(product);
      window.alert('Thêm vào giỏ hàng thành công!');
    }
  
}

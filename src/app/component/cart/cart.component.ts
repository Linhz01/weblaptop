import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Products } from 'src/app/model/products';
import { Transactions } from 'src/app/model/transactions';
import { Users } from 'src/app/model/users';
import { CartServiceService } from 'src/app/service/cart-service.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { TransactionServiceService } from 'src/app/service/transaction-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products : any = [];
  public grandTotal !: number;
  isLoggedIn = false;
  username?: string;
  email?: string;
  name?: string;
  address?: string;
  phone?: number;
  public users: Users;



  constructor(private cartService: CartServiceService,
              private tokenStorageService: TokenStorageService,
              private router: Router,
              private transervice: TransactionServiceService,         
    ) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
      this.email = user.email;
      this.name = user.name;
      this.address = user.address;
      this.phone = user.phone;
    }

  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

  public onAddTransaction(addForm: NgForm): void {
    this.transervice.addTrans(addForm.value).subscribe(
      (response: Transactions) => {
        console.log(response);
        addForm.reset();
        window.alert('Đơn hàng sẽ được xử lí và vận chuyển');
        this.cartService.removeAllCart();
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        
      }
    );
  }

  public onOpenModalEdit(mode: string): void {
    const container = document.getElementById('cartcontent');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {  
      button.setAttribute('data-target', '#transactionModal');
      
    }

    container.appendChild(button);
    button.click();
  }

  productDetails(id: number){
    this.router.navigate(['home/details', id]);
  }
}

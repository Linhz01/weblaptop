import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { ProductComponent } from './component/product/product.component';
import { FormsModule } from '@angular/forms';
import { ProductServiceService } from './service/product-service.service';
import { UserServiceService } from './service/user-service.service';
import { HomeComponent } from './component/home/home.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { DetailsComponent } from './component/details/details.component';
import { HeaderComponent } from './base/header/header.component';
import { FooterComponent } from './base/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { CartComponent } from './component/cart/cart.component';
import { NewComponent } from './component/new/new.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'user', component: UserComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'carts', component: CartComponent },
  { path: 'news', component: NewComponent },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    HomeComponent,
    ContactsComponent,
    DetailsComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CartComponent,
    NewComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),

  ],
  providers: [ProductServiceService, UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

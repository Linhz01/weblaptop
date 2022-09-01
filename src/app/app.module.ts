import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductServiceService } from './service/product-service.service';
import { UserService } from './service/user-service.service';
import { ContactsComponent } from './component/contacts/contacts.component';
import { LoginComponent } from './component/login/login.component';
import { LayoutUserModule } from './layout-user/layout-user.module';
import { CommentComponent } from './component/comment/comment.component';
import { TransactionComponent } from './component/transaction/transaction.component';
import { IntroducesComponent } from './component/introduces/introduces.component';
import { ErorpageComponent } from './erorpage/erorpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EllipsisModule } from 'ngx-ellipsis';
import { RegisterComponent } from './component/register/register.component';
import {GoogleAnalyticsService} from './service/google-analytics.service';



const routes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ContactsComponent,
    CommentComponent,
    TransactionComponent,
    IntroducesComponent,
    LoginComponent,
    ErorpageComponent,
    RegisterComponent,
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    LayoutUserModule,
    BrowserAnimationsModule,
    EllipsisModule,
    ReactiveFormsModule,
    


  ],
  providers: [ProductServiceService, UserService, GoogleAnalyticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

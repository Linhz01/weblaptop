import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../component/product/product.component';
import { ProductServiceService } from '../service/product-service.service';
import { LayoutUserRoutingModule } from './layout-user-routing.module';
import { LayoutUserComponent } from './layout-user.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from '../component/cart/cart.component';
import { DetailsComponent } from '../component/details/details.component';
import { NewComponent } from '../component/new/new.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import {MatSortModule} from '@angular/material/sort';
import { HomeComponent } from '../component/home/home.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { ProfileComponent } from '../component/profile/profile.component';
import { BrandComponent } from '../component/brand/brand.component';
import { ContactsComponent } from '../component/contacts/contacts.component';
import { DatePipe } from '@angular/common';
import { HotToastModule } from '@ngneat/hot-toast';



@NgModule({
  declarations: [
    ProductComponent,
    LayoutUserComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    DetailsComponent,
    NewComponent,
    HomeComponent,
    ProfileComponent,
    BrandComponent,
    ContactsComponent,
  ],
  imports: [
    CommonModule,
    LayoutUserRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatSortModule,
    MdbCarouselModule,
    HotToastModule.forRoot(),
    
    

    

  ],

  providers: [ProductServiceService],

  
})
export class LayoutUserModule { }
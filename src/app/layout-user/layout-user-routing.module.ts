import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from '../component/brand/brand.component';
import { CartComponent } from '../component/cart/cart.component';
import { DetailsComponent } from '../component/details/details.component';
import { HomeComponent } from '../component/home/home.component';
import { IntroducesComponent } from '../component/introduces/introduces.component';
import { NewComponent } from '../component/new/new.component';
import { ProductComponent } from '../component/product/product.component';
import { LayoutAdminComponent } from '../layout-admin/layout-admin.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'brand/:bid', component: ProductComponent },
  { path: 'category/:id', component: ProductComponent },
  // { path: 'products/brand/:id', component: BrandComponent },
  { path: 'admin', component: LayoutAdminComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'carts', component: CartComponent },
  { path: 'news', component: NewComponent },
  { path: 'introduces', component: IntroducesComponent },
  { path: '', component: HomeComponent },


  

];

@NgModule({
declarations: [],
  imports: [RouterModule.forChild(routes),
            CommonModule],
  exports: [RouterModule]
})
export class LayoutUserRoutingModule { };
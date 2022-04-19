import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './base/footer/footer.component';
import { HeaderComponent } from './base/header/header.component';
import { DetailsComponent } from './component/details/details.component';
import { ProductComponent } from './component/product/product.component';
import { UserComponent } from './component/user/user.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'users', component: UserComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'details/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

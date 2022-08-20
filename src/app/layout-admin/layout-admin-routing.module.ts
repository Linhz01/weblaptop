import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from '../component/details/details.component';
import { DefaultSidebarComponent } from './default-sidebar/default-sidebar.component';
import { BrandmanagerComponent } from './manager/brandmanager/brandmanager.component';
import { CategorymanagerComponent } from './manager/categorymanager/categorymanager.component';
import { ContactmanagerComponent } from './manager/contactmanager/contactmanager.component';
import { IntroducesmanagerComponent } from './manager/introducesmanager/introducesmanager.component';
import { NewmanagerComponent } from './manager/newmanager/newmanager.component';
import { ProductmanagerComponent } from './manager/productmanager/productmanager.component';
import { TransactionmanagerComponent } from './manager/transactionmanager/transactionmanager.component';

const routes: Routes = [
  { path: 'product', component: ProductmanagerComponent },
  { path: 'detail/:id', component: DetailsComponent },
  { path: 'transaction', component: TransactionmanagerComponent },
  { path: 'new', component: NewmanagerComponent },
  { path: 'introduce', component: IntroducesmanagerComponent },
  { path: 'contact', component: ContactmanagerComponent },
  { path: 'brand', component: BrandmanagerComponent },
  { path: 'category', component: CategorymanagerComponent },
  { path: 'sidebar', component: DefaultSidebarComponent },

  

];

@NgModule({
declarations: [],
  imports: [RouterModule.forChild(routes),
            CommonModule],
  exports: [RouterModule]
})
export class LayoutAdminRoutingModule { };

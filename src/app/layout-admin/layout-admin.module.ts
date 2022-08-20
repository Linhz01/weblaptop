import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultHeaderComponent } from './default-header/default-header.component';
import { DefaultFooterComponent } from './default-footer/default-footer.component';
import { ProductmanagerComponent } from './manager/productmanager/productmanager.component';
import { BrandmanagerComponent } from './manager/brandmanager/brandmanager.component';
import { UsermanagerComponent } from './manager/usermanager/usermanager.component';
import { TransactionmanagerComponent } from './manager/transactionmanager/transactionmanager.component';
import { NewmanagerComponent } from './manager/newmanager/newmanager.component';
import { IntroducesmanagerComponent } from './manager/introducesmanager/introducesmanager.component';
import { ContactmanagerComponent } from './manager/contactmanager/contactmanager.component';
import { LayoutAdminRoutingModule } from './layout-admin-routing.module';
import { LayoutAdminComponent } from './layout-admin.component';
import { DefaultSidebarComponent } from './default-sidebar/default-sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { CategorymanagerComponent } from './manager/categorymanager/categorymanager.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSliderModule } from '@angular/material/slider';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { CKEditorModule } from 'ng2-ckeditor';
import { SafeHtmlPipe } from './safeHtml.pipe';



@NgModule({
  declarations: [
    ProductmanagerComponent,
    BrandmanagerComponent,
    UsermanagerComponent,
    TransactionmanagerComponent,
    NewmanagerComponent,
    IntroducesmanagerComponent,
    ContactmanagerComponent,
    DefaultHeaderComponent,
    DefaultFooterComponent,
    LayoutAdminComponent,
    DefaultSidebarComponent,
    DashboardComponent,
    CategorymanagerComponent,
    SafeHtmlPipe,
  ],
  imports: [
    CommonModule,
    LayoutAdminRoutingModule,
    FormsModule,
    NgxPaginationModule,
    MatSliderModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    CKEditorModule,
    

    
    

  ]
})
export class LayoutAdminModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './component/details/details.component';
import { LoginComponent } from './component/login/login.component';
import { NewComponent } from './component/new/new.component';
import { RegisterComponent } from './component/register/register.component';
import { ErorpageComponent } from './erorpage/erorpage.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { LayoutUserComponent } from './layout-user/layout-user.component';

const routes: Routes = [

  { path: 'details/:id', component: DetailsComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'news', component: NewComponent },
  { path: 'home/login', component: LoginComponent },
  { path: 'home/register', component: RegisterComponent },
  // { path: '**', pathMatch: 'full', component: ErorpageComponent },
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'home',
        loadChildren: () => import('./layout-user/layout-user.module').then(m => m.LayoutUserModule)
        , component: LayoutUserComponent
      },
      {
        path: 'admin',
        loadChildren: () => import('./layout-admin/layout-admin.module').then(m => m.LayoutAdminModule)
        , component: LayoutAdminComponent
      },
    ]
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
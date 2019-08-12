import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { TableListComponent } from './table-list/table-list.component';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatTabsModule, MatTableModule } from '@angular/material';
import {DialogOverviewExampleDialog} from './table-list/table-list.component';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';
import { CreateRestaurantComponent } from './restaurant/resgister/create.restaurant.component';
import { PendingRestaurantComponent } from './restaurant/pendingrequests/pending.restaurants.component';
import { AddUserComponent } from './user/adduser/adduser.component';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin/admin.home.component';
import { AdminLoginComponent } from './admin_login/admin.login.component';

const routes: Routes =[
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'items',
    component:TableListComponent
  }
  ,
  {
    path: '',
    component:CreateRestaurantComponent
  },
  {
    path: 'restaurants/pending',
    component:PendingRestaurantComponent
  },
  {
    path: 'user/register',
    component: AddUserComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'admin/home',
    component: AdminHomeComponent
  },
  {
    path: 'admin',
    component: AdminLoginComponent
  }
];

@NgModule({
  declarations:[
    
  ],
  imports: [
    CommonModule,
    BrowserModule,  
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    HttpClientModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  entryComponents: [DialogOverviewExampleDialog],
  exports: [
  ],
})
export class AppRoutingModule { }

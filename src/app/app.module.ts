import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {environment} from './../environments/environment';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSucessComponent } from './order-sucess/order-sucess.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import {AuthService } from './auth.service';
import {AuthGuardService} from './auth-guard.service';
import {AuthGuardAdminService} from './auth-guard-admin.service';
import {UserService} from './user.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from "./category.service";
import { FormsModule } from "@angular/forms";
import { ProductService } from "./product.service";
import {CustomFormsModule} from 'ng2-validation';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSucessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule, 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'products', component:ProductsComponent},
      {path:'shopping-cart', component:ShoppingCartComponent},
      {path:'login', component:LoginComponent},
      {path:'check-out' , component:CheckOutComponent,canActivate:[AuthGuardService]},
      {path:'order-sucess', component:OrderSucessComponent,canActivate:[AuthGuardService]},
      {path:'my/orders',component:MyOrdersComponent,canActivate:[AuthGuardService]},
      {path:'admin/products' ,component:AdminProductsComponent ,canActivate:[AuthGuardService]},
      {path:'admin/products/:id' ,component:ProductFormComponent ,canActivate:[AuthGuardService]},
      {path:'admin/products/new' ,component:ProductFormComponent,canActivate:[AuthGuardService]},
      {path:'admin/orders' , component:AdminOrdersComponent,canActivate:[AuthGuardService]}
      ]),
      CustomFormsModule
  ],
  providers: [AuthService,AuthGuardService,AuthGuardAdminService,UserService,CategoryService,
  ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
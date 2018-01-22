import { LoginComponent } from './login/login.component';

import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingcartComponent,
    CheckoutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent
  ],
  imports: [
    BrowserModule,
    //Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'products',component:ProductsComponent},
      {path:'shopping-cart',component:ShoppingcartComponent},
      {path:'check-out',component:CheckoutComponent},
      {path:'order-success',component:OrderSuccessComponent},
     
      {path:'admin-products',component:AdminProductsComponent},
      {path:'admin-orders',component:AdminOrdersComponent},


    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

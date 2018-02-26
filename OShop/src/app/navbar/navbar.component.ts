import { ShoppingCart } from './../models/shopping-cart';
import { ShoppingCartService } from './../shopping-cart.service';
import { AppUser } from './../models/app-user';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireObject } from 'angularfire2/database';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cart$: AngularFireObject<ShoppingCart>
  cart:Observable<ShoppingCart>
appuser:AppUser;
shoppingCartItemCount:number=0;
//We nee dto unsubsribe in OnDestroy(). Instead, we can use asyc pipe.So
  //user$:Observable<firebase.User>; Coming from service Constructor
  constructor(public authservice:AuthService,
  private shoppingcartservice:ShoppingCartService) { 
//this.user$=afAuth.authState;
    this.authservice.appUser$.subscribe(appuser=>this.appuser=appuser);
 
  }

 async ngOnInit() {
  let cart$ = await this.shoppingcartservice.totalQty();
  cart$.subscribe(count => this.shoppingCartItemCount = count);
 //OR we can use this way
//this.cart=await this.shoppingcartservice.getCart();

  }
  logout()
  {
this.authservice.logout();
  }
}

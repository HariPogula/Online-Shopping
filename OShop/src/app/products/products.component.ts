import { CategoryService } from './../services/category.service';
import { ProductService } from './../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../classes/products';
import 'rxjs/add/operator/switchMap';
import { ShoppingCartService } from '../shopping-cart.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,OnDestroy {
  cart: {};
  subscription: Subscription;
  category: string;
  products$;
products:any[]=[];
filteredProducts:any[];

  constructor(private productservice:ProductService,
    private shoppingcartservice:ShoppingCartService,
  private route:ActivatedRoute) {
    this.products$=this.productservice.getAll();

    // productservice
    // .getAll()
    // .switchMap(products => {
    //   this.products = products;
    //   return route.queryParamMap;
    // })
    // .subscribe(params => {
    //   this.category = params.get('category');
      
    //   this.filteredProducts = (this.category) ? 
    //     this.products.filter(p => p.category === this.category) : 
    //     this.products;
    // });
      
    
   
   }

  async ngOnInit() {
    this.subscription = (await this.shoppingcartservice.getCart()).valueChanges()
    .subscribe(cart => this.cart = cart);
  }
  ngOnDestroy()
  {
this.subscription.unsubscribe();
  }
  addToCart(key,product)
  { 
    console.log(key+" "+product)
   this.shoppingcartservice.addToCart(key,product)
    
  }
}

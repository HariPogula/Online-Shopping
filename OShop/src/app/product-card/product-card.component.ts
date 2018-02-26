import { ShoppingCartService } from './../shopping-cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../classes/products';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product: any;
  @Input('show-actions') showActions = true;
  @Input('shpping-cart') shoppingcart;
  constructor(private shoppingcartservice:ShoppingCartService) { }

  ngOnInit() {
  }
  addToCart(key,product)
  { 
    console.log(key+" "+product)
   this.shoppingcartservice.addToCart(key,product)
    
  }
  removeFromCart(key,product)
  {
    this.shoppingcartservice.removeFromCart(key,product)
  }
  getQuantity()
  {
    if(!this.shoppingcart) return 0;
   let item= this.shoppingcart.items[this.product.key];
   return item?item.quantity:0;
  }
}

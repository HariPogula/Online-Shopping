import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../classes/products';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
@Input('product') product:Products;
@Input('show-actions') showactions=true;
  constructor() { }

  ngOnInit() {
  }

}
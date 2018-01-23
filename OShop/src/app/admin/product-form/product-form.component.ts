import { ProductService } from './../../services/product.service';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
categories$;
  constructor(
    public router:Router,
    public categoryservice:CategoryService,
    public productservice:ProductService) {
    this.categories$=this.categoryservice.getCategories();
   }

  ngOnInit() {
  }
Save(product)
{
  console.log(product);
  //this.productservice.Create(product);
  this.router.navigate(['/admin/products']);
}
}

import { CategoryService } from './../services/category.service';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../classes/products';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  category: string;
products:Products[]=[];
filteredProducts:Products[];
categories$;
  constructor(private productservice:ProductService,
    private categoryservice:CategoryService,
  private route:ActivatedRoute) {
   this.productservice
   .getAll()
   .switchMap(products=>
    {
      this.products=products;
return this.route.queryParamMap; //Store in Params Variable in next line
    })
    .subscribe(params=>
    {
      this.category=params.get('category') //Set in hyperlink
      //Filter
      this.filteredProducts=(this.category)?
      this.products.filter(p=>p.category===this.category):
      this.products
    })
      
    this.categories$=this.categoryservice.getCategories();
   
   }

  ngOnInit() {
  }

}

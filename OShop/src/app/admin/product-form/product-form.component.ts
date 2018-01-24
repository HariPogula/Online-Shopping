import { ProductService } from './../../services/product.service';
import { CategoryService } from './../../services/category.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: any={};
  productId:any;
categories$;
  constructor(
    public router:Router,
    private route:ActivatedRoute,
    public categoryservice:CategoryService,
    public productservice:ProductService) {
    this.categories$=this.categoryservice.getCategories();

    //For Editing
    this.productId=this.route.snapshot.paramMap.get('id');
    if(this.productId) this.productservice.getProduct(this.productId).take(1).subscribe(p=>this.product=p)
   }

  ngOnInit() {
  }
Save(product)
{
  console.log(product);
  
  if(this.productId) this.productservice.updateProduct(this.productId,product);
  else
this.productservice.Create(product);
  this.router.navigate(['/admin/products']);
}
Delete()
{
  console.log(this.productId)
  if(confirm("Are you sure want to delete?? "))
  {
    this.productservice.deleteProduct(this.productId);
    this.router.navigate(['/admin/products']);
  }
}
}

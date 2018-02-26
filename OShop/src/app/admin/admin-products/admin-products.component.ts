import { ProductService } from './../../services/product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Products } from '../../classes/products';
import { DataTableResource } from 'angular5-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit,OnDestroy {
  itemCount: number;
  items: Products[]=[];
products:any[];

subscription:Subscription;
tableResource:DataTableResource<any>;
  constructor(public productservice:ProductService) { 
    this.subscription = this.productservice.getAll()
    
    .subscribe(x => 
    {
      this.products = x;
     this.initializeTable(this.products)

      
    })
    }
    reloadItems(params:Products)
{
  if(!this.tableResource) return;
  this.tableResource.query(params).
  then(items=>this.items=items);
}

  ngOnInit() {
  }
private initializeTable(products:Products[])
{
  this.tableResource=new DataTableResource(products);
  this.tableResource.query({offset:0}).
      then(items=>this.items=items);
      
      this.tableResource.count().then(count=>this.itemCount=count)
}
  filter(query:string)
  {
console.log("query is "+query);
let filteredProducts = (query) ?
this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
this.products;
this.initializeTable(filteredProducts);
  }
  
  ngOnDestroy()
  {
this.subscription.unsubscribe();
  }
}

import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Products } from '../classes/products';

@Injectable()
export class ProductService {

  constructor(public db:AngularFireDatabase) { }
Create(product)
{
return this.db.list('/products').push(product);
}
getAll()
{
  return this.db.list('/products').snapshotChanges();
}
getProduct(productid)
{
return this.db.object('/products/'+productid).valueChanges()
}
updateProduct(productid,product)
{
return this.db.object('/products/'+productid).update(product);
}
deleteProduct(productid)
{
  return this.db.object('/products/'+productid).remove();
}
}

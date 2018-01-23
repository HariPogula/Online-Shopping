import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductService {

  constructor(public db:AngularFireDatabase) { }
Create(product)
{
return this.db.list('/products').push(product);
}
}

import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

import { Products } from './classes/products';
import 'rxjs/add/operator/take';

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }
  private create() {
    return this.db.list("/shopping-carts").push(
      {

        dateCreated: new Date().getTime()
      })
  }
  public async getCart() {
    let cartId=await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId);
  }
  private async getOrCreateCartId():Promise<string> {
    let cartId = localStorage.getItem('cartId');
    //Another Way
if (!cartId) {
  let result=await this.create();
  localStorage.setItem('cartId', result.key);
  return result.key
    }
    //Else
      return cartId

    // if (!cartId) {
    //   this.create().then(result => {
    //     localStorage.setItem('cartId', result.key);
    //     return this.getCart(result.key)
    //   })
    // }
    // else {
    //   return this.getCart(cartId)
    // }
  }
  getItem(cartId:string,productId:string)
  {
    return  this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }
  async addToCart(key,product) {
    console.log("key is "+key)
    const cartId = await this.getOrCreateCartId();
   let item$=this.getItem(cartId,key)
    item$.snapshotChanges().take(1).subscribe(item => {
      if (item.payload.exists()) {
        item$.update({quantity: item.payload.val().quantity + 1});
      } else {
        item$.set({product: {
          title: product.title,
          price: product.price,
          category: product.category,
          imageUrl: product.imageUrl,
        }, quantity: 1} );
      }
    });
  }
}

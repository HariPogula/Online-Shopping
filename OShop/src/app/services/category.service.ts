import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CategoryService {

  constructor(public db:AngularFireDatabase) { }
  getCategories()
  {
    return this.db.list('/categories',ref=>ref.orderByChild('name'))
    .snapshotChanges(); //Check with the ts and htm files
    //.valueChanges();
  }

}

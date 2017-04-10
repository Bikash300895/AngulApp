import {Injectable} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {
  business: FirebaseListObservable<any[]>;
  categories: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.business = af.database.list('/business');
    this.categories = af.database.list('/categories');
  }

  getBusiness(){
    return this.business;
  }

  getCategories(){
    return this.categories;
  }
}

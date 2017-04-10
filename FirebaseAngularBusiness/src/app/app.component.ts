import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "./services/firebase.services";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit{
  business: any;
  categories: any;
  appState: string;
  activeKey: string;

  constructor(private _firebaseService: FirebaseService){

  }

  ngOnInit(): void {
    this._firebaseService.getBusiness().subscribe(business => {
      this.business = business;
    });

    this._firebaseService.getCategories().subscribe(categories => {
      this.categories = categories;
    });

  }

  changeState(state, key){
    console.log('changing state to : '+state)
    if(key){
      console.log('changing key to : ' + key)
      this.activeKey = key;
    }
    this.appState = state;
  }

}

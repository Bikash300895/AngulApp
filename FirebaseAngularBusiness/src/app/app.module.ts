import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyBt4jSmNtb1x1UxrL8pmmqYqct4yWVQvgc',
  authDomain: 'fir-angularbusiness.firebaseapp.com',
  databaseURL: 'https://fir-angularbusiness.firebaseio.com',
  storageBucket: 'fir-angularbusiness.appspot.com',
  messagingSenderId: '536387976056'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

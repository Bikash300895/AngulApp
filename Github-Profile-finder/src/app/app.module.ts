import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {FromsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {ProfileComponent} from 'app/components/profile.component';



@NgModule({
  declarations: [
    AppComponent, ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

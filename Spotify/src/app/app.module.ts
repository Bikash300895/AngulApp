import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HomeComponent} from "./components/Home/home.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {AboutComponent} from "./components/about/about.component";
import {SearchComponent} from "./components/search/search.component";

@NgModule({
  declarations: [
    AppComponent, HomeComponent, AboutComponent, NavbarComponent, SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

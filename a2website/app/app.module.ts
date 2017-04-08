import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {AboutComponent} from "./components/about/about.component";
import {HomeComponent} from "./components/Home/home.component";
import { RouterModule, Routes } from '@angular/router';

import {routing} from './app.routing';


@NgModule({
  imports:      [ BrowserModule , routing],
  declarations: [ AppComponent, NavbarComponent, AboutComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

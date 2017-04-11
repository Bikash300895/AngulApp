import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing,appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import {ProfileComponent} from "./component/profile/profile.component";
import {HomeComponent} from "./component/home/home.component";

@NgModule({
  declarations: [
    AppComponent,ProfileComponent,HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
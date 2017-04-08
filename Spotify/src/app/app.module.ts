import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {HomeComponent} from "./components/Home/home.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {AboutComponent} from "./components/about/about.component";
import {SearchComponent} from "./components/search/search.component";
import {routing} from "./app.routing";
import {ArtistComponent} from "./components/artist/artist.component";

@NgModule({
  declarations: [
    AppComponent, HomeComponent, AboutComponent, NavbarComponent, SearchComponent, ArtistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

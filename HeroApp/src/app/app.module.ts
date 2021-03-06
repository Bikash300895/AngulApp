import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {HeroDetailComponent} from "./Components/hero-detail.component";
import {HeroesComponent} from "./Components/heroes.component";
import {RouterModule} from "@angular/router";
import {HeroService} from "./Service/hero.service";

@NgModule({
  declarations: [
    AppComponent, HeroDetailComponent, HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ])
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }

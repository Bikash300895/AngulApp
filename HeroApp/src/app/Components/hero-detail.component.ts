import {Component, Input } from '@angular/core';
import {Hero} from "../Classes/hero";

@Component({
  selector:'hero-deatil',
  template: `    
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `
})

export class HeroDetailComponent{
  @Input() hero: Hero;
  constructor(){
    console.log(this.hero);
  }
}

import { Component } from '@angular/core';
import {Hero} from "./Components/hero";
import {HeroDetailComponent} from "./Components/hero-detail.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroDetailComponent]
})
export class AppComponent {
  public title: string;
  public HEROES: any;
  public heroes: any;
  public selectedHero: any;

  constructor(){
    this.title = 'Tour of Heroes';
    this.HEROES = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    this.heroes = this.HEROES;
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
}

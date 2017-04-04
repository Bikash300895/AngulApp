import { Component } from '@angular/core';
import {Hero} from "./Classes/hero";
import {HeroDetailComponent} from "./Components/hero-detail.component";
import {HeroService} from "./Service/hero.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent {
  public title: string;
  public HEROES: any;
  public heroes: Hero[];
  public selectedHero: any;

  constructor(private heroservice: HeroService){
    this.title = 'Tour of Heroes';

    this.heroes = this.heroservice.getHeores();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
}

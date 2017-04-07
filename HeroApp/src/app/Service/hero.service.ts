import {Injectable} from '@angular/core';
import {Hero} from "../Classes/hero";
import {HEROES} from "../Classes/mock-heroes";

@Injectable()
export class HeroService{
  getHeores(): Promise<Hero[]>{
    return Promise.resolve(HEROES);
  }

}

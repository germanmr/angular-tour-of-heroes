import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './heroes/Hero';
import { Observable, of } from "rxjs";
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes = HEROES;

  constructor(private messageService : MessageService) { }

  getHeroes() : Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add("Hero Service: fetched heroes");
    return heroes;
  }
}

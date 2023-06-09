import { Component, OnInit } from '@angular/core';
import { Hero } from './Hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  selectedHero?: Hero;
  heroes? : Array<Hero>;  

  constructor(
    private heroService : HeroService,
    private messageService : MessageService){}  

  ngOnInit(): void {
    this.heroService.getHeroes()
        .subscribe(heroes=>this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add("Selected Hero id " + hero.name);
  }
}

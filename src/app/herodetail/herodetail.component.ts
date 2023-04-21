import { Component, Input } from '@angular/core';
import { Hero } from '../heroes/Hero';

@Component({
  selector: 'app-herodetail',
  templateUrl: './herodetail.component.html',
  styleUrls: ['./herodetail.component.css']
})
export class HerodetailComponent {
  @Input() hero?: Hero;
}

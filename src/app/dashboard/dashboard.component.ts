import {Component, OnInit} from '@angular/core';
import {HeroService} from '../hero.service';

import { Router} from '@angular/router';
import {Hero} from '../Hero';
@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [String(require('./dashboard.component.css'))]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private route: Router, private heroService: HeroService) {

  }
  ngOnInit(): any {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
  }
  gotoDetail(hero: Hero) {
    let link = ['/detail', hero.id];
    this.route.navigate(link);
  }

}

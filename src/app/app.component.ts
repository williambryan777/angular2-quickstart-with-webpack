

import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HeroService }     from './hero.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroFormComponent} from './hero-form/hero-form.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
let styles = String(require('./app.component.css'));
@Component({
  selector: 'my-app',
//   template: `
//   <h1>{{title}}</h1>
//   <nav>
//     <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
//     <a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
//     <a [routerLink]="['/heroform']" routerLinkActive="active">HeroForm</a>
//   </nav>
//   <router-outlet></router-outlet>
// `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    HeroService
  ],
  precompile: [DashboardComponent, HeroesComponent, HeroDetailComponent, HeroFormComponent],
  templateUrl: './app.component.html'
  // styleUrls: [styles],
})
export class AppComponent {
  title = 'Tour of Heroes';
}
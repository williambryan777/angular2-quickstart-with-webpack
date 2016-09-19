/**
 * Created by Micha on 2016/7/18.
 */
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Hero} from './Hero';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
  private heroesUrl = 'app/heroes';  // URL to web api

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
        .toPromise()
        .then(response => response.json().data)
        .catch(this.handleError);
  }

  getHero(id: number) {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }


  delete(hero: Hero) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.heroesUrl}/${hero.id}`;

    return this.http
        .delete(url, {headers: headers})
        .toPromise()
        .catch(this.handleError);
  }

  save(hero: Hero): Promise<Hero>  {
    if (hero.id) {
      return this.put(hero);
    }
    return this.post(hero);
  }



private post(hero: Hero) {
  let headers = new Headers({
    'Content-Type': 'application/json'});
  return this.http.post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
      .toPromise()
      .then(response => response.json().data)
      .catch(this.handleError);
}

// Update existing Hero
  private put(hero: Hero) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.heroesUrl}/${hero.id}`;

    return this.http
        .put(url, JSON.stringify(hero), {headers: headers})
        .toPromise()
        .then(() => hero)
        .catch(this.handleError);
  }


  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }









  // getHeroesSlowly(){
  //   return new Promise<Hero[]>(resolve=>setTimeout(function() {
  //     return resolve(HEROES)
  //   }, 2000));
  // }


  //
  // getHeroesSlowly(){
  //   return new Promise<Hero[]>(resolve=>setTimeout(()=>resolve(HEROES),3000))
  // }






}

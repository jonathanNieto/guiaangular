import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Heroe } from '../components/http-request/heroes/heroe.interface';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  heroesUrl: string = "https://heroes-app-64932.firebaseio.com/heroes.json";
  heroeUrl: string = "https://heroes-app-64932.firebaseio.com/heroes/";

  constructor(private http: HttpClient, private router: Router) { }

  nuevoHeroe(heroe: Heroe) {
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.heroesUrl, body, { headers }).pipe(
      map((response: any) => {
        this.router.navigate(['/http-request/heroe', response.name]);
      }, (error) => console.error({ error })
      ));
  }
  actualizarHeroe(heroe: Heroe, key$: string) {
    let body = JSON.stringify(heroe);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let url = `${this.heroeUrl}/${key$}.json`;

    return this.http.put(url, body, { headers }).pipe(
      map((response: any) => {
        this.router.navigate(['/http-request/heroes']);
      }, (error) => console.error({ error })
      ));
  }

  getHeroe(key$: string) {
    let url = `${this.heroeUrl}${key$}.json`;
    console.log({ url });
    return this.http.get(url).pipe(
      map((response: Heroe) => {
        console.log("getHeroe:", response);
        return response;
      }, (error) => console.error({ error })
      ));
  }

  getHeroes() {
    return this.http.get(this.heroesUrl).pipe(
      map((response: any) => {
        return response;
      }, (error) => console.error({ error })
      ));
  }

  borrarHeroe(key$: string) {
    let url = `${this.heroeUrl}${key$}.json`;
    return this.http.delete(url).pipe(
      map((response: any) => {
        return response;
      }, (error) => {
        console.error(error);
      }
      )
    );
  }
}

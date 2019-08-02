import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ScriptService } from 'src/app/services/script.service';
import { HighlightService } from 'src/app/services/highlight.service';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css']
})
export class HttpRequestComponent implements OnInit, AfterViewChecked {

  highlighted: boolean = false;
  constructor(private scriptService: ScriptService, private highlightService: HighlightService) {
    scriptService
      .load('prism')
      .then(data => { });
  }

  ngOnInit() {
    this.highlightService.highlightAll();
  }

  ngAfterViewChecked() {
    if (!this.highlighted) {

      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  /* code to render Html */
  httpclientmoduleCode1 = `import { HttpClientModule } from '@angular/common/http';`;
  httpclientmoduleCode2 = `imports: [
  BrowserModule,
  HttpClientModule,
  AppRoutingModule
],`;

  httpclientCode1 = `import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';`

  httpclientCode2 = `getQuery(query: string) {
  const url = \`https://api.spotify.com/v1/\${ query }\`;
  const headers = new HttpHeaders({
    Authorization:
      'Bearer BQA7K72dsoKBCywpZRQlJ1C3cqLVctSBKPfoflYhkDvpIrTyIRXrcC2jrp7IBQtb-RhoJNU9QI7WGuop_no'
  });
  return this.http.get(url, {headers});
}`;

  httprequestCode = `import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getQuery(query: string) {
    const url = \`https://api.spotify.com/v1/\${ query }\`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQA7K72dsoKBCywpZRQlJ1C3cqLVctSBKPfoflYhkDvpIrTyIRXrcC2jrp7IBQtb-RhoJNU9QI7WGuop_no'
    });
    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(
      map((response: any) => response.albums.items)
    );
  }

  getArtists(termino: string) {
    if (termino.length > 0) {
      return this.getQuery(\`search?q=\${termino}&type=artist&limit=20\`).pipe(
        map((response: any) => response.artists.items)
      );
    } else {
      return new Observable((observer) => observer.next());
    }
  }

  getArtist(id: string) {
      return this.getQuery(\`artists/\${id}\`);
  }

  getTopTracks(id: string) {
    return this.getQuery(\`artists/\${id}/top-tracks?country=us\`).pipe(
      map((response: any) => response.tracks)
    );
  }
}`;

  subscribeCode = `import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;
  
  constructor(private service: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.service.getNewReleases()
    .subscribe( (response: any) => {
      this.nuevasCanciones = response;
      this.loading = false;
    }, (errorResponse) => {
        this.error = true;
        this.loading = false;
      console.log(errorResponse.error.error.message);
      this.mensajeError = errorResponse.error.error.message;
    });
  }

  ngOnInit() {
  }

}`;
  codeHttpGet1 = `getHeroes() {
  return this.http.get(this.heroesUrl).pipe(
    map((response: any) => {
      return response;
    }, (error) => console.error({ error })
    ));
}

/* consumiendo esta petición http */
constructor(private heroesService: HeroeService) {
  this.heroesService.getHeroes()
    .subscribe((response) => {
      this.heroes = response;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    });
}`;

  codeHttpGet2 = `getHeroe(key$: string) {
  let url =\`\${ this.heroeUrl } \${ key$ }.json\`;
  console.log({ url });
  return this.http.get(url).pipe(
    map((response: Heroe) => {
      console.log("getHeroe:", response);
      return response;
    }, (error) => console.error({ error })
    ));
}


/* consumiendo esta petición http */
nuevo: boolean = true;
id: string;

constructor(private heroeService: HeroeService, private activatedRoute: ActivatedRoute, private router: Router) {
  this.activatedRoute.params.subscribe((params) => {
    this.id = params['id'];
    if (this.id !== 'nuevo') {
      this.nuevo = false;
      this.heroeService.getHeroe(this.id)
        .subscribe(heroeResponse => {
          console.log("heroeResponse: ",heroeResponse);
           this.heroe = heroeResponse
        });
    }
  })
}`;
  
  codeHttpPost1 = `nuevoHeroe(heroe: Heroe) {
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

/* consumiendo esta petición http */
guardar() {
  console.log(this.heroe);
  if (this.id === 'nuevo') {
    this.heroeService.nuevoHeroe(this.heroe)
      .subscribe(data => {
        this.nuevo = false
        this.router.navigate(['/http-request/heroes'])
      });
  } else {
    this.heroeService.actualizarHeroe(this.heroe, this.id)
      .subscribe(data => { this.nuevo = false });
  }
}`;
  
  codeHttpPut1 = `actualizarHeroe(heroe: Heroe, key$: string) {
  let body = JSON.stringify(heroe);
  let headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  let url = \`\${this.heroeUrl}/\${key$}.json\`;
  return this.http.put(url, body, { headers }).pipe(
    map((response: any) => {
      this.router.navigate(['/http-request/heroes']);
    }, (error) => console.error({ error })
    ));
}

/* consumiendo esta petición http */
guardar() {
  console.log(this.heroe);
  if (this.id === 'nuevo') {
    this.heroeService.nuevoHeroe(this.heroe)
      .subscribe(data => {
        this.nuevo = false
        this.router.navigate(['/http-request/heroes'])
      });
  } else {
    this.heroeService.actualizarHeroe(this.heroe, this.id)
      .subscribe(data => { this.nuevo = false });
  }
}`;
  
  codeHttpDelete1 = `borrarHeroe(key$: string) {
  let url = \`\${this.heroeUrl}\${key$}.json\`;
  return this.http.delete(url).pipe(
    map((response: any) => {
      return response;
    }, (error) => {
      console.error(error);
    }
    )
  );
}

/* consumiendo esta petición http */
borrarHeroe(key$: string) {
  this.heroesService.borrarHeroe(key$)
    .subscribe((response) => {
      this.loading = true;
      this.heroes = [];
      console.log({ response });
      if (response) {
        console.error({ response });
      } else {
        delete this.heroes[key$];
        this.heroesService.getHeroes()
          .subscribe((response) => {
            this.heroes = response;
            setTimeout(() => {
              this.loading = false;
            }, 2000);
          });
      }
    });
}`;

}

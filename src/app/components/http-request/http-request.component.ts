import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ScriptService } from 'src/app/services/script.service';
import { HighlightService } from 'src/app/services/highlight.service';

@Component({
  selector: 'app-http-request',
  templateUrl: './http-request.component.html',
  styleUrls: ['./http-request.component.css']
})
export class HttpRequestComponent implements OnInit, AfterViewChecked {

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

}

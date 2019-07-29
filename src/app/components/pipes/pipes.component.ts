import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ScriptService } from 'src/app/services/script.service';
import { HighlightService } from 'src/app/services/highlight.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit, AfterViewChecked {

  name = 'Jonathan';
  fullName = 'joNatHan nieTo dÁvILa';
  numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  PI = Math.PI;
  numPercent = 0.564971;
  money = 2599.782;
  obj = {
    name: 'John',
    lastname: 'Doe',
    age: 33,
    email: 'john.doe@email.com',
    address: {
      street: 'Park Avenue',
      number: '52'
    }
  };

  promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Llegó la información');
    }, 3500);
  });
  myDate = new Date();

  pipeUppercaseCode = `&lt;td&gt;{{name | uppercase }}&lt;/td&gt;`;
  pipeLowercaseCode = `&lt;td&gt;{{name | lowercase }}&lt;/td&gt;`;
  pipeTitlecaseCode = `&lt;td&gt;{{name | titlecase }}&lt;/td&gt;`;
  pipeSlice1Code = `&lt;td&gt;{{name | slice:3 }}&lt;/td&gt;`;
  pipeSlice2Code = `&lt;td&gt;{{name | slice:0:3 }}&lt;/td&gt;`;
  pipeSlice3Code = `&lt;td&gt;{{name | slice:0:3 }}&lt;/td&gt;`;
  pipeNumber1Code = `&lt;td&gt;{{number | number:'3.0-0' }}&lt;/td&gt;`;
  pipeNumber2Code = `&lt;td&gt;{{number | number:'1.0-5' }}&lt;/td&gt;`;
  pipePercent1Code = `&lt;td&gt;{{numPercent | percent }}&lt;/td&gt;`;
  pipePercent2Code = `&lt;td&gt;{{numPercent | percent:'2.2-3' }}&lt;/td&gt;`;
  pipeCurrency1Code = `&lt;td&gt;{{money | currency }}&lt;/td&gt;`;
  pipeCurrency2Code = `&lt;td&gt;{{money | currency:'EUR' }}&lt;/td&gt;`;
  pipeCurrency3Code = `&lt;td&gt;{{money | currency:'EUR':'symbol-narrow':'4.0-1' }}&lt;/td&gt;`;
  pipeJsonCode = `&lt;td&gt;{{obj | json }}&lt;/td&gt;`;
  pipeAsyncCode = `&lt;td&gt;{{promiseValue | async }}&lt;/td&gt;`;
  pipeDateCode = `import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from '../src/app/app.component';
  
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);
 
@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }`;

  pipeDate1Code = `&lt;td&gt;{{myDate | date }}&lt;/td&gt;`;
  pipeDate2Code = `&lt;td&gt;{{myDate | date:'dd - MMMM - yyyy' }}&lt;/td&gt;`;

  pipeCapitalizado1Code = `import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizado'})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: any): any {
    
  }
}`;


  pipeCapitalizado2Code = `import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
  
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { registerLocaleData } from '@angular/common';
import  localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

/* routing */
import { AppRoutingModule } from './app.routing';

/* services */
import { ScriptService } from './services/script.service';
import { HighlightService } from './services/highlight.service';

import { CapitalizadoPipe } from './pipes/capitalizado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CapitalizadoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    HighlightService,
    ScriptService,
    { provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
`;

  pipeCapitalizado3Code = `import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizado'})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: any): any {
      value = value.toLowerCase();
      let words = value.split(' ');
      for (const key in words) {
          words[key] = words[key][0].toUpperCase() + words[key].substr(1);
      }
      return words.join(" ");
  }
}`;

  pipeCapitalizado4Code = `&lt;td&gt;{{ fullName | capitalizado }}&lt;/td&gt;`;

  pipeSafeDomCode = `import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeDom'
})
export class SafeDomPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer){}
  transform(value: string, url: string): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value);
  }
}`;
  pipeSafeDom2Code = `&lt;iframe 
  width="560" 
  height="315" 
  [src]="video | safeDom:'https://www.youtube.com/embed/'" 
  frameborder="0" 
  allow="accelerometer; autoplay; 
  encrypted-media; gyroscope; 
  picture-in-picture" 
  allowfullscreen&gt;
&lt/iframe&gt;`;

  video = 'uVRUnMHp8FY';


  highlighted: boolean = false;
  constructor(private scriptService: ScriptService, private highlightService: HighlightService) {
    scriptService
      .load('prism', 'sourceCode')
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

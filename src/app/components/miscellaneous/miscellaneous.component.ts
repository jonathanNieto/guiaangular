import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ScriptService } from 'src/app/services/script.service';
import { HighlightService } from 'src/app/services/highlight.service';


@Component({
  selector: 'app-miscellaneous',
  templateUrl: './miscellaneous.component.html',
  styleUrls: ['./miscellaneous.component.css']
})
export class MiscellaneousComponent implements OnInit, AfterViewChecked {

  size = 10;
  ngstyleCode = `&lt;p [ngStyle]="{'font-size': '50px'}"&gt;Hola mundo ... esta es una etiqueta html&lt;/p&gt;
&lt;h3 [style.fontSize.px]="size"&gt;Hola ... esta es otra etiqueta html&lt;/h3&gt;
&lt;h3 [style.color]="'blue'"&gt;Hola ... esta es otra etiqueta html&lt;/h3&gt;
&lt;p [ngStyle]="{'font-style': 'italic'}"&gt;... Lorem ipsum dolor sit, aperiam dolores nostrum! ...&lt;/p&gt;
&lt;div [ngStyle]="{'background-color':'green'}"&gt;Some words are here&lt;/div&gt;`;

  ngstyleCode1 = `&lt;p [style.fontSize.px]="size"&gt;Cambiar tamaño de la fuente&lt;/p&gt;
&lt;button type="button" class="btn btn-primary btn-sm mr-2" (click)="size = size + 5"&gt;
  &lt;i class="fa fa-plus" aria-hidden="true"&gt;&lt;/i&gt;
&lt;/button&gt;
&lt;button type="button" class="btn btn-primary btn-sm mr-2" (click)="size = size - 5"&gt;
  &lt;i class="fa fa-minus" aria-hidden="true"&gt;&lt;/i&gt;
&lt;/button&gt;`;

  alert0 = 'alert-danger';
  alert1 = 'alert-ligth';
  obj = {
    property: false,
    success: true
  };

  ngclassCode = `&lt;header&gt;ngClass&lt;/header&gt;
&lt;div [ngClass]="'alert-primary'" class="alert" role="alert"&gt;
    A simple primary alert—check it out!
&lt;/div&gt;
&lt;div [ngClass]="alert0" class="alert" role="alert"&gt;
    A simple primary alert—check it out!
&lt;/div&gt;
&lt;div [ngClass]="alert1" class="alert" role="alert"&gt;
    A simple primary alert—check it out!
&lt;/div&gt;

&lt;button type="button" class="btn btn-success btn-sm mr-2" (click)="alert1 = 'alert-success'"&gt;Succes&lt;/button&gt;
&lt;button type="button" class="btn btn-warning btn-sm mr-2" (click)="alert1 = 'alert-warning'"&gt;Warning&lt;/button&gt;
&lt;div class="my-3"&gt;
    &lt;h3 [ngClass]="{'text-danger': true}"&gt;Lorem ipsum dolor sit amet.&lt;/h3&gt;
    &lt;h3 [ngClass]="{'text-danger': obj.property, 'text-info': !obj.property }"&gt;Lorem ipsum dolor sit amet.&lt;/h3&gt;
&lt;/div&gt; 
&lt;button 
    [ngClass]="{'btn-outline-danger': obj.success, 'btn-success': !obj.success}" 
    (click)="obj.success = !obj.success"
    type="button" class="btn"&gt;
    Cambiar clase
&lt;/button&gt;`;

  loading = false;
  asyncprocessCode1 = `&lt;button (click)="ejecutar()"
  [disabled] = "loading"
  type="button" class="btn btn-primary"&gt;
  &lt;i [ngClass]="{'fa-save': !loading, 'fa-refresh fa-spin': loading}"
      class="fa" aria-hidden="true"&gt;&lt;/i&gt;
  &nbsp;Guardar cambios
&lt;/button&gt;`;
  asyncprocessCode2 = `ejecutar() {
  this.loading = true;
  setTimeout(() =&gt; {
    this.loading = false;
  }, 5000);
}`;

  directiveCode = `import { Directive } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor() { }

}`;

  directiveCode1 = `import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private elementRef: ElementRef) { }

}`;

  directiveCode2 = `import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter') mouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor = "yellow";
  }

  @HostListener('mouseleave') mouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = null;
  }
}`;

  alerts = [
    { id: 1, name: "primary" },
    { id: 2, name: "secondary" },
    { id: 3, name: "success" },
    { id: 4, name: "danger" },
    { id: 5, name: "warning" },
    { id: 6, name: "info" },
    { id: 7, name: "light" },
    { id: 8, name: "dark" },
  ];
  selectedValue = "info";

  ngswitchCode = `&lt;div class="row"&gt;
  &lt;div class="clo-3"&gt;
    &lt;select class="form-control" [(ngModel)]="selectedValue"&gt;
        &lt;option&gt;Selecciona un valor&lt;/option&gt;
        &lt;option *ngFor="let c of alerts" [value]="c.name"&gt;{{c.name}}&lt;/option&gt;
    &lt;/select&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;div [ngSwitch]="selectedValue" class="my-3"&gt;
  &lt;div *ngSwitchCase="'primary'" class="alert alert-primary" role="alert"&gt;
      A simple primary alert—check it out!
  &lt;/div&gt;
  &lt;div *ngSwitchCase="'secondary'" class="alert alert-secondary" role="alert"&gt;
      A simple secondary alert—check it out!
  &lt;/div&gt;
  &lt;div *ngSwitchCase="'success'" class="alert alert-success" role="alert"&gt;
      A simple success alert—check it out!
  &lt;/div&gt;
  &lt;div *ngSwitchCase="'danger'" class="alert alert-danger" role="alert"&gt;
      A simple danger alert—check it out!
  &lt;/div&gt;
  &lt;div *ngSwitchCase="'warning'" class="alert alert-warning" role="alert"&gt;
      A simple warning alert—check it out!
  &lt;/div&gt;
  &lt;div *ngSwitchCase="'info'" class="alert alert-info" role="alert"&gt;
      A simple info alert—check it out!
  &lt;/div&gt;
  &lt;div *ngSwitchCase="'light'" class="alert alert-light" role="alert"&gt;
      A simple light alert—check it out!
  &lt;/div&gt;
  &lt;div *ngSwitchDefault class="alert alert-dark" role="alert"&gt;
      A simple dark alert—check it out!
  &lt;/div&gt;
&lt;/div&gt;`;

  ngswitchCode1 = `alerts = [
  {id: 1, name: "primary"},
  {id: 2, name: "secondary"},
  {id: 3, name: "success"},
  {id: 4, name: "danger"},
  {id: 5, name: "warning"},
  {id: 6, name: "info"},
  {id: 7, name: "light"},
  {id: 8, name: "dark"},
];
selectedValue = "info";`;

  highlighted: boolean = false;
  constructor(private scriptService: ScriptService, private highlightService: HighlightService) {
    scriptService
      .load('prism')
      .then(data => { });
    console.log('constructor()');

  }

  ngOnInit() {
    this.highlightService.highlightAll();
    console.log('ngOnInit()');
  }

  ngAfterViewChecked() {
    if (!this.highlighted) {
      
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
    console.log('ngAfterViewChecked()');
  }

  ejecutar() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }

  ngOnChanges() {
    console.log('ngOnChanges()');
  }
  ngDoCheck() {
    console.log('ngDoCheck()');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit()');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked()')
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit()');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy()');
  }

}

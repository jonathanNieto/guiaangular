import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ScriptService } from 'src/app/services/script.service';
import { HighlightService } from 'src/app/services/highlight.service';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit, AfterViewChecked {

  inputCode = `import { Component, OnInit, Input } from '@angular/core';
  @Component({
    selector: 'bank-account',
    template: '
      Bank Name: {{bankName}}
      Account Id: {{id}}
    '
  })
  class BankAccount {
    // This property is bound using its original name.
    @Input() bankName: string;
    // this property value is bound to a different property name
    // when this component is instantiated in a template.
    @Input('account-id') id: string;
  
    // this property is not bound, and is not automatically updated by Angular
    normalizedBankName: string;
  }
  
  @Component({
    selector: 'app',
    template: '
      &lt;bank-account bankName="RBC" account-id="4747"&gt;&lt;/bank-account&gt;
    '
  })
  class App {}`;

  outputCode = `import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-heroe-tarjeta",
  templateUrl: "./heroe-tarjeta.component.html"
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter&lt;number&gt;;
  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {}

  verHeroe() {
    this.heroeSeleccionado.emit(this.index);
  }
}`;
  
  htmlcode = `&lt;div class="container my-4"&gt;
&lt;h1&gt;Héroes &lt;small&gt;Marvel y DC&lt;/small&gt;&lt;/h1&gt;
&lt;hr&gt;
&lt;!-- *ngFor="let heroe of heroes; let i = index" --&gt;
&lt;div class="card-columns"&gt;
    &lt;app-heroe-tarjeta (heroeSeleccionado)="verHeroe( $event )" [heroe]="heroe" [index]="i" *ngFor="let heroe of heroes; let i = index"&gt;&lt;/app-heroe-tarjeta&gt;
&lt;/div&gt;
&lt;/div&gt;`

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

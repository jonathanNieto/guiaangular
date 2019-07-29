import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { ScriptService } from 'src/app/services/script.service';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit, AfterViewChecked {

  ngifCode = `&lt;div class="card-columns animated fadeIn fast"&gt;
  &lt;app-heroe-card [heroe]="heroe" [id]="id" *ngFor="let heroe of heroes; let id = index"&gt;&lt;/app-heroe-card&gt;
&lt;/div&gt;
&lt;li *ngFor="let user of userObservable | async as users; index as i; first as isFirst"&gt;
  {{ person.name }} &lt;span *ngIf="isFirst"&gt;default&lt;/span&gt;
&lt;/li&gt;`;
  
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

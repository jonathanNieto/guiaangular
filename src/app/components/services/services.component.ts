import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { ScriptService } from 'src/app/services/script.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, AfterViewChecked {

  code = `import { Component, OnInit } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  constructor(private highlightService: HighlightService) { }

  ngOnInit() {
    this.highlightService.highlightAll();
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

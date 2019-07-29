import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { HighlightService } from 'src/app/services/highlight.service';
import { ScriptService } from 'src/app/services/script.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css'],
})
export class RoutesComponent implements OnInit, AfterViewChecked {

  code = `import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewProjectComponent } from './components/new-project/new-project.component';
import { LibrariesComponent } from './components/libraries/libraries.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { RoutesComponent } from './components/routes/routes.component';
import { ServicesComponent } from './components/services/services.component';
import { InputOutputComponent } from './components/input-output/input-output.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { HttpRequestComponent } from './components/http-request/http-request.component';

const routes: Routes = [
    { path: 'new-angular-project', component: NewProjectComponent },
    { path: 'libraries', component: LibrariesComponent },
    { path: 'structural-directives', component: StructuralDirectivesComponent },
    { path: 'routes', component: RoutesComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'input-output', component: InputOutputComponent },
    { path: 'pipes', component: PipesComponent },
    { path: 'http-request', component: HttpRequestComponent },
    { path: 'directives', component: DirectivesComponent },
    { path: '**', component: NewProjectComponent },
    { path: '', redirectTo: 'new-angular-project', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}`;

  codeParams = `import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService, Heroe } from 'src/app/services/heroe.service';

@Component({
  selector: 'app-deatil',
  templateUrl: './deatil.component.html',
  styleUrls: ['./deatil.component.css']
})
export class DeatilComponent implements OnInit {

  heroe: Heroe;

  constructor(private activatedRoute: ActivatedRoute, private heroeService: HeroeService) {
    this.activatedRoute.params.subscribe((params) => {
      this.heroe = this.heroeService.getHeroe(params.id);
    })
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

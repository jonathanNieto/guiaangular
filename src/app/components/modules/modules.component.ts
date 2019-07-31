import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/services/script.service';
import { HighlightService } from 'src/app/services/highlight.service';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  codeModules0 = `import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule } from '@angular/forms';
  import { RouterModule } from '@angular/router';
  import { HttpClientModule } from '@angular/common/http';
  
  import { PagesComponent } from './pages.component';
  
  /* modules */
  import { SharedModule } from './shared/shared.module';
  
  import { NewProjectComponent } from './new-project/new-project.component';
  import { LibrariesComponent } from './libraries/libraries.component';
  import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
  import { RoutesComponent } from './routes/routes.component';
  import { ServicesComponent } from './services/services.component';
  import { InputOutputComponent } from './input-output/input-output.component';
  import { PipesComponent } from './pipes/pipes.component';
  import { HttpRequestComponent } from './http-request/http-request.component';
  import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
  import { UserComponent } from './user/user.component';
  import { NewUserComponent } from './user/new-user.component';
  import { EditUserComponent } from './user/edit-user.component';
  import { DetailUserComponent } from './user/detail-user.component';
  import { GuardsComponent } from './guards/guards.component';
  
  /* pipes */
  import { CapitalizadoPipe } from '../pipes/capitalizado.pipe';
  import { SafeDomPipe } from '../pipes/safe-dom.pipe';
  
  /* directives */
  import { ResaltadoDirective } from '../directives/resaltado.directive';
  
  /* routing */
  import { PagesRoutingModule } from './pages.routing';
  
  @NgModule({
      declarations: [
          PagesComponent,
          NewProjectComponent,
          LibrariesComponent,
          MiscellaneousComponent,
          RoutesComponent,
          ServicesComponent,
          InputOutputComponent,
          PipesComponent,
          HttpRequestComponent,
          StructuralDirectivesComponent,
          CapitalizadoPipe,
          SafeDomPipe,
          ResaltadoDirective,
          UserComponent,
          NewUserComponent,
          EditUserComponent,
          DetailUserComponent,
          GuardsComponent,
      ],
      imports: [CommonModule, SharedModule, FormsModule, RouterModule, HttpClientModule, PagesRoutingModule],
      exports: [],
      providers: [],
  })
  export class PagesModule { }`;
    
    codeModules1 = `import { BrowserModule } from '@angular/platform-browser';
  import { NgModule, LOCALE_ID } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { HttpClientModule } from '@angular/common/http';
  
  /* modules */
  import { PagesModule } from './components/pages.module';
  
  /* routing */
  import { AppRoutingModule } from './app.routing';
  
  /* services */
  import { ScriptService } from './services/script.service';
  import { HighlightService } from './services/highlight.service';
  
  import { AppComponent } from './app.component';
  import { LoginComponent } from './components/login/login.component';
  import { registerLocaleData } from '@angular/common';
  import  localeEs from '@angular/common/locales/es';
  import { RegisterComponent } from './components/login/register.component';
  import { FormsModule } from '@angular/forms';
  registerLocaleData(localeEs);
  
  @NgModule({
    declarations: [
      AppComponent,
      LoginComponent,
      RegisterComponent,
    ],
    imports: [
      BrowserModule,
      PagesModule,
      AppRoutingModule,
      CommonModule,
      HttpClientModule,
      FormsModule
    ],
    providers: [
      HighlightService,
      ScriptService,
      { provide: LOCALE_ID, useValue: 'es'}
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }`;

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

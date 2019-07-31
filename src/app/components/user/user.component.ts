import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScriptService } from 'src/app/services/script.service';
import { HighlightService } from 'src/app/services/highlight.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  codeRoutes = `import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewProjectComponent } from './components/new-project/new-project.component';
import { LibrariesComponent } from './components/libraries/libraries.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
    { path: 'new-angular-project', component: NewProjectComponent },
    { path: 'libraries', component: LibrariesComponent },
    {
        path: 'user/:id',
        component: UserComponent,
        children: [
          { path: 'newUser', component: NewUserComponent },
          { path: 'editUser', component: EditUserComponent },
          { path: 'detailUser', component: DetailUserComponent },
          { path: '**', redirectTo: 'newUser', pathMatch: 'full' },
        ]
    },
    { path: '**', component: NewProjectComponent },
    { path: '', redirectTo: 'new-angular-project', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}`;
  
  codeRoutes2 = `import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewProjectComponent } from './components/new-project/new-project.component';
import { LibrariesComponent } from './components/libraries/libraries.component';
import { UserComponent } from './components/user/user.component';

import { childRoutes } from './components/user/user.routing';

const routes: Routes = [
    { path: 'new-angular-project', component: NewProjectComponent },
    { path: 'libraries', component: LibrariesComponent },
    {
        path: 'user/:id',
        component: UserComponent,
        children: childRoutes
    },
    { path: '**', component: NewProjectComponent },
    { path: '', redirectTo: 'new-angular-project', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}`;
  
  codeRoutes3 = `import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { NewUserComponent } from './new-user.component';
import { EditUserComponent } from './edit-user.component';
import { DetailUserComponent } from './detail-user.component';

export const childRoutes: Routes = [
    { path: 'newUser', component: NewUserComponent },
    { path: 'editUser', component: EditUserComponent },
    { path: 'detailUser', component: DetailUserComponent },
    { path: '**', redirectTo: 'newUser', pathMatch: 'full' },
];`
  
  codeParams = `import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styles: []
})
export class NewUserComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.parent.params.subscribe((params) => {
      this.id = params.id;
    });
  }

  ngOnInit() {
  }

}`;

  codeRoutes4 = `import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { LibrariesComponent } from './libraries/libraries.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { RoutesComponent } from './routes/routes.component';
import { ServicesComponent } from './services/services.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { PipesComponent } from './pipes/pipes.component';
import { HttpRequestComponent } from './http-request/http-request.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { UserComponent } from './user/user.component';
import { childRoutes } from './user/user.routing';
import { GuardsComponent } from './guards/guards.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'new-angular-project', component: NewProjectComponent },
            { path: 'libraries', component: LibrariesComponent },
            { path: 'structural-directives', component: StructuralDirectivesComponent },
            { path: 'routes', component: RoutesComponent },
            { path: 'services', component: ServicesComponent },
            { path: 'input-output', component: InputOutputComponent },
            { path: 'pipes', component: PipesComponent },
            { path: 'http-request', component: HttpRequestComponent },
            { path: 'miscellaneous', component: MiscellaneousComponent },
            {
                path: 'user/:id',
                component: UserComponent,
                children: childRoutes
            },
            { path: 'guards', component: GuardsComponent },
            { path: '', redirectTo: 'new-angular-project', pathMatch: 'full' },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}`;

  codeRoutes5 = `import { NgModule } from '@angular/core';
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
    exports: [
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
    providers: [],
})
export class PagesModule { }`;
  
  codeRoutes6 = `import { BrowserModule } from '@angular/platform-browser';
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
  constructor(private activatedRoute: ActivatedRoute, private scriptService: ScriptService, private highlightService: HighlightService) {
    scriptService
      .load('prism')
      .then(data => { });
    
      this.activatedRoute.params.subscribe((params) => {
        console.log('ruta padre');
        console.log(params);
      });
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

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

import { Component, OnInit } from '@angular/core';
import { ScriptService } from 'src/app/services/script.service';
import { HighlightService } from 'src/app/services/highlight.service';

@Component({
  selector: 'app-guards',
  templateUrl: './guards.component.html',
  styleUrls: ['./guards.component.css']
})
export class GuardsComponent implements OnInit {

  codeGuard0 = `import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }  
}`;
  
codeGuard1 = `import { NgModule } from '@angular/core';
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

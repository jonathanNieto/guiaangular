import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewProjectComponent } from './components/new-project/new-project.component';
import { LibrariesComponent } from './components/libraries/libraries.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { RoutesComponent } from './components/routes/routes.component';
import { ServicesComponent } from './components/services/services.component';
import { InputOutputComponent } from './components/input-output/input-output.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { MiscellaneousComponent } from './components/miscellaneous/miscellaneous.component';
import { HttpRequestComponent } from './components/http-request/http-request.component';
import { UserComponent } from './components/user/user.component';

import { childRoutes } from './components/user/user.routing';
import { GuardsComponent } from './components/guards/guards.component';


const routes: Routes = [
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
    { path: '**', component: NewProjectComponent },
    { path: '', redirectTo: 'new-angular-project', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

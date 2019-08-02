import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { LibrariesComponent } from './libraries/libraries.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { RoutesComponent } from './routes/routes.component';
import { ServicesComponent } from './services/services.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { PipesComponent } from './pipes/pipes.component';
import { MiscellaneousComponent } from './miscellaneous/miscellaneous.component';
import { GuardsComponent } from './guards/guards.component';
import { ModulesComponent } from './modules/modules.component';

/* guard */
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
            {
                path: 'http-request',
                loadChildren: () => import('./http-request/http-request.module')
                    .then(m => m.HttpRequestModule)
            },
            { path: 'miscellaneous', component: MiscellaneousComponent },
            {
                path: 'user/:id',
                loadChildren: () => import('./user/user.module')
                    .then(m => m.UserModule)
            },
            { path: 'guards', component: GuardsComponent },
            { path: 'modules', component: ModulesComponent },
            {
                path: 'forms',
                loadChildren: () => import('./forms/forms.module')
                    .then(m => m.MyFormsModule)
            },
            { path: '', redirectTo: 'new-angular-project', pathMatch: 'full' },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { GuardsComponent } from './guards/guards.component';
import { ModulesComponent } from './modules/modules.component';

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
        StructuralDirectivesComponent,
        CapitalizadoPipe,
        SafeDomPipe,
        ResaltadoDirective,
        GuardsComponent,
        ModulesComponent,
    ],
    imports: [
        CommonModule, SharedModule, FormsModule,
        RouterModule, HttpClientModule, ReactiveFormsModule,
        PagesRoutingModule, 
    ],
    exports: [],
    providers: [],
})
export class PagesModule { }
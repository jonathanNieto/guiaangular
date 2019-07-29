import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { LibrariesComponent } from './components/libraries/libraries.component';
import { MiscellaneousComponent } from './components/miscellaneous/miscellaneous.component';
import { RoutesComponent } from './components/routes/routes.component';
import { ServicesComponent } from './components/services/services.component';
import { InputOutputComponent } from './components/input-output/input-output.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { HttpRequestComponent } from './components/http-request/http-request.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { registerLocaleData } from '@angular/common';
import  localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

/* routing */
import { AppRoutingModule } from './app.routing';

/* services */
import { ScriptService } from './services/script.service';
import { HighlightService } from './services/highlight.service';

/* pipes */
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { SafeDomPipe } from './pipes/safe-dom.pipe';

/* directives */
import { ResaltadoDirective } from './directives/resaltado.directive';
import { UserComponent } from './components/user/user.component';
import { NewUserComponent } from './components/user/new-user.component';
import { EditUserComponent } from './components/user/edit-user.component';
import { DetailUserComponent } from './components/user/detail-user.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { GuardsComponent } from './components/guards/guards.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
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
    NavbarComponent,
    GuardsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    HighlightService,
    ScriptService,
    { provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
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
import { HeroeService } from './services/heroe.service';

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
    HeroeService,
    { provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

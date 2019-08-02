import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HttpRequestComponent } from './http-request.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroeComponent } from './heroes/heroe.component';

const routes: Routes = [
    {
        path: '',
        component: HttpRequestComponent,
        children: [
            { path: 'heroes', component: HeroesComponent },
            { path: 'heroe/:id', component: HeroeComponent },
            { path: '', redirectTo: 'heroes', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HttpRequestRoutingModule { }

export const routedComponents = [
    HttpRequestComponent,
    HeroesComponent,
    HeroeComponent,
];


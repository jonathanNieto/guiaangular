import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsComponent } from './forms.component';
import { TemplateComponent } from './template.component';
import { DataComponent } from './data.component';

const routes: Routes = [
    {
        path: '',
        component: FormsComponent,
        children: [
            { path: 'template', component: TemplateComponent },
            { path: 'data', component: DataComponent },
            { path: '', redirectTo: 'template', pathMatch: 'full' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormRoutingModule { }

export const routedComponents = [
    FormsComponent,
    TemplateComponent,
    DataComponent,
];


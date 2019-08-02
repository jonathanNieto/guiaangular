import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routedComponents, FormRoutingModule } from './forms.routing';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [...routedComponents],
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule,
        RouterModule, FormRoutingModule
    ],
})
export class MyFormsModule {}
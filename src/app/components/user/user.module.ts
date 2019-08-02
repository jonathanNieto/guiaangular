import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserRoutingModule, routedComponents } from './user.routing';

@NgModule({
    declarations: [...routedComponents],
    imports: [
        CommonModule, UserRoutingModule
    ],
})
export class UserModule {}
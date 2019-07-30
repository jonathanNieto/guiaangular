import { NgModule } from '@angular/core';

import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        SidebarComponent,
        NavbarComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
    ],
    exports: [
        SidebarComponent,
        NavbarComponent
    ],
    providers: [],
})
export class SharedModule {}
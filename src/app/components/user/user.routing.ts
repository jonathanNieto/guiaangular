import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { NewUserComponent } from './new-user.component';
import { EditUserComponent } from './edit-user.component';
import { DetailUserComponent } from './detail-user.component';

export const childRoutes: Routes = [
    { path: 'newUser', component: NewUserComponent },
    { path: 'editUser', component: EditUserComponent },
    { path: 'detailUser', component: DetailUserComponent },
    { path: '**', redirectTo: 'newUser', pathMatch: 'full' },
];
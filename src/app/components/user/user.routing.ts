import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { NewUserComponent } from './new-user.component';
import { EditUserComponent } from './edit-user.component';
import { DetailUserComponent } from './detail-user.component';

export const routes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            { path: 'newUser', component: NewUserComponent },
            { path: 'editUser', component: EditUserComponent },
            { path: 'detailUser', component: DetailUserComponent },
            { path: '**', redirectTo: 'newUser', pathMatch: 'full' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }

export const routedComponents = [
    UserComponent,
    NewUserComponent,
    EditUserComponent,
    DetailUserComponent,
];


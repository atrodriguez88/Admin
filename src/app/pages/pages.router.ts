import { NgModule } from '@angular/core/src/metadata/ng_module';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { TableComponent } from './table/table.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'} },
            { path: 'progress', component: ProgressComponent, data: {title: 'Progress'} },
            { path: 'graficas1', component: Graficas1Component, data: {title: 'Grafics'} },
            { path: 'table', component: TableComponent, data: {title: 'Tables'} },
            { path: 'account', component: AccountSettingsComponent, data: {title: 'Account Settings'} },
            { path: 'promises', component: PromisesComponent, data: {title: 'Promises'} },
            { path: 'rxjs', component: RxjsComponent, data: {title: 'RxJs'} },
            { path: 'profile', component: ProfileComponent, data: {title: 'Profile'} },
            // Maintenance
            { path: 'users', component: UsersComponent, data: {title: 'User Maintenance'} },
            { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
        ]
    }
];

// @NgModule({
//     imports: [RouterModule.forChild(routes)],
//     exports: [RouterModule]
// })
// export class PagesRoutingModule { }

 export const PagesRoutingModule = RouterModule.forChild(routes);
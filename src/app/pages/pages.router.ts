import { NgModule } from '@angular/core/src/metadata/ng_module';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { TableComponent } from './table/table.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: 'table', component: TableComponent },
            { path: 'account', component: AccountSettingsComponent },
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
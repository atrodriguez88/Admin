import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

const routes: Routes = [
    // {
    //     path: '',
    //     component: PagesComponent,
    //     children: [
    //         { path: 'dashboard', component: DashboardComponent },
    //         { path: 'progress', component: ProgressComponent },
    //         { path: 'graficas1', component: Graficas1Component },
    //         { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    //     ]
    //  },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', pathMatch: 'full', component: NoPageFoundComponent}
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes, { useHash: true })],
//     exports: [RouterModule]
// })
// export class AppRoutingModule { }
export const AppRoutingModule = RouterModule.forRoot(routes, { useHash: true });

import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

import { PagesRoutingModule } from './pages.router';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        NoPageFoundComponent
    ],
    imports: [
        SharedModule,
        PagesRoutingModule
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        NoPageFoundComponent
    ],
    providers: [],
})
export class PagesModule { }
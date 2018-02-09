import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Pages
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';

// Modules
import { SharedModule } from '../shared/shared.module';

// Temporal
import { IncrementComponent } from '../components/increment/increment.component';

// Route
import { PagesRoutingModule } from './pages.router';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementComponent
    ],
    imports: [
        SharedModule,
        FormsModule,
        PagesRoutingModule
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    providers: [],
})
export class PagesModule { }
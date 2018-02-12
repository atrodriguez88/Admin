import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Pages
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { TableComponent } from './table/table.component';

// Modules
import { SharedModule } from '../shared/shared.module';

// ng2-charts
import { ChartsModule } from 'ng2-charts';

// Temporal
import { IncrementComponent } from '../components/increment/increment.component';
import { ModifyTableComponent } from '../components/modify-table/modify-table.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

// Route
import { PagesRoutingModule } from './pages.router';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementComponent,
        TableComponent,
        ModifyTableComponent,
        GraficoDonaComponent
    ],
    imports: [
        SharedModule,
        FormsModule,
        PagesRoutingModule,
        ChartsModule
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        TableComponent,
        GraficoDonaComponent
    ],
    providers: [],
})
export class PagesModule { }
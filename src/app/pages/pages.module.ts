import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


// Modules
import { SharedModule } from '../shared/shared.module';

// ng2-charts
import { ChartsModule } from 'ng2-charts';

// Route
import { PagesRoutingModule } from './pages.router';

// Pages
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { TableComponent } from './table/table.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { SearchComponent } from './search/search.component';

// Pipes
import { PipesModule } from '../pipes/pipes.module';

import { IncrementComponent } from '../components/increment/increment.component';
import { ModifyTableComponent } from '../components/modify-table/modify-table.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementComponent,
        TableComponent,
        ModifyTableComponent,
        GraficoDonaComponent,
        ModalUploadComponent,
        AccountSettingsComponent,
        PromisesComponent,
        RxjsComponent,
        ProfileComponent,
        UsersComponent,
        SearchComponent
    ],
    imports: [
        SharedModule,
        FormsModule,
        PagesRoutingModule,
        ChartsModule,
        PipesModule,
        CommonModule
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        TableComponent,
        GraficoDonaComponent,
        ModalUploadComponent
    ],
    providers: [],
})
export class PagesModule { }
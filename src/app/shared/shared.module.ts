import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

// Pipes
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        PipesModule
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbComponent
    ],
    providers: [],
})
export class SharedModule { }
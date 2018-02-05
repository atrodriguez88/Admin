import { NgModule } from '@angular/core';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbComponent
    ],
    imports: [
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbComponent
    ],
    providers: [],
})
export class SharedModule { }
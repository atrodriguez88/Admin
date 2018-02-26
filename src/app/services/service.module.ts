import { NgModule } from '@angular/core';



// Guards and Services
import { SettingsService, SharedService, SidebarService, UpLoadFileService, AdminGuard } from './service.index';


@NgModule({
  imports: [
  ],
  declarations: [],
  providers: [
    SettingsService,
    SharedService,
    SidebarService,
    UpLoadFileService,
    AdminGuard
  ]
})
export class ServiceModule { }

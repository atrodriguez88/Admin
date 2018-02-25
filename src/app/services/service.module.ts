import { NgModule } from '@angular/core';

// Services
import { SettingsService, SharedService, SidebarService, UpLoadFileService } from './service.index';


@NgModule({
  imports: [
  ],
  declarations: [],
  providers: [
    SettingsService,
    SharedService,
    SidebarService,
    UpLoadFileService
  ]
})
export class ServiceModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';

// Router
import { AppRoutingModule } from './app.router';

// Services
import { SharedService } from './services/shared.service';
import { SidebarService } from './services/sidebar.service';
import { SettingsService } from './services/settings.service';

// Modules
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NoPageFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    FormsModule
  ],
  providers: [
    SharedService,
    SidebarService,
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

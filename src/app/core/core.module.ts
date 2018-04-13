import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppContentComponent } from './components/app-content/app-content.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { MatMenuModule } from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { DbService } from './services/db.service';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    AppRoutingModule
  ],
  declarations: [AppContentComponent, AppHeaderComponent, LoginComponent],
  exports: [AppHeaderComponent, AppContentComponent, LoginComponent],
  providers:[DbService]
})
export class CoreModule { }

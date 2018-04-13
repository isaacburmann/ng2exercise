import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppContentComponent } from './components/app-content/app-content.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { MatMenuModule } from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';
import { DbService } from './services/db.service';
import { BackButtonComponent } from './components/backbutton/backbutton.component';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    AppRoutingModule
  ],
  declarations: [AppContentComponent, AppHeaderComponent, BackButtonComponent],
  exports: [AppHeaderComponent, AppContentComponent],
  providers: [DbService]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppContentComponent } from './components/app-content/app-content.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { MatMenuModule, MatCardModule, MatButtonModule } from '@angular/material';
import { AppRoutingModule } from '../app-routing.module';
import { DbService } from './services/db.service';
import { HomeComponent } from '../home/home.component';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule
  ],
  declarations: [AppContentComponent, AppHeaderComponent, HomeComponent],
  exports: [AppHeaderComponent, AppContentComponent, HomeComponent],
  providers: [DbService]
})
export class CoreModule { }

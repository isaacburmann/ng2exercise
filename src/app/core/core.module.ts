import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppContentComponent } from './components/app-content/app-content.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AppContentComponent, AppHeaderComponent],
  exports: [AppHeaderComponent, AppContentComponent]
})
export class CoreModule { }

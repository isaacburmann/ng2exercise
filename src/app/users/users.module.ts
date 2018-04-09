import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatListModule,
    MatIconModule
  ],
  declarations: [UsersListComponent, UserDetailComponent]
})
export class UsersModule { }

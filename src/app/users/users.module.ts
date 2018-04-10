import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {MatIconModule, MatListModule, MatPaginatorModule} from '@angular/material';
import {UsersService} from './service/users.service';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatListModule,
    MatIconModule,
    MatPaginatorModule
  ],
  declarations: [UsersListComponent, UserDetailComponent],
  providers: [UsersService]
})
export class UsersModule { }

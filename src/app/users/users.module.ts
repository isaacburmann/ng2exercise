import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersService } from './service/users.service';
import { MatListModule, MatPaginatorModule, MatCardModule, MatButtonModule } from '@angular/material';
import { BackButtonComponent } from '../core/components/backbutton/backbutton.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatListModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [UsersListComponent, UserDetailComponent, BackButtonComponent],
  providers: [UsersService]
})
export class UsersModule { }

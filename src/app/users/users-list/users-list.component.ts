import { Component, OnInit } from '@angular/core';
import {User} from '../../core/models/user.model';
import {UsersService} from '../service/users.service';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[];

  // MatPaginator Inputs
  length = 20;
  pageSize = 10;
  pageSizeOptions = [5, 10, 15, 20];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers('1', '5').subscribe(
      res => {
        this.users = res['results'];
        console.log(res);
        },
      err => console.error(err),
      () => console.log('done loading users'));
  }

  nextPage($event) {
    this.pageEvent = $event;
    this.usersService.getUsers(this.pageEvent.pageIndex.toString(), this.pageEvent.pageSize.toString()).subscribe(
      res => {
        this.users = res['results'];
        console.log(res);
      },
      err => console.error(err),
      () => console.log('done loading users'));
  }

}

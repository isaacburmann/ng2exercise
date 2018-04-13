import { Component, OnInit } from '@angular/core';
import { User } from '../../core/models/user.model';
import { UsersService } from '../service/users.service';
import { PageEvent } from '@angular/material';
import { DbService } from '../../core/services/db.service';
import { Router } from '@angular/router';

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
  lastPageIndex = 0;

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private usersService: UsersService, private dbService: DbService, private router: Router) { }

  ngOnInit() {
    this.usersService.getUsers('1', this.pageSize.toString()).subscribe(
      res => {
        this.users = res['results'];
        console.log(res);
        this.dbService.clearDB();
        for (const user of this.users) {
          this.dbService.addUser(user);
        }
        this.dbService.getAllUser().then(usersAdded => {
          console.log(usersAdded);
          this.users = usersAdded;
        });
      },
      err => console.error(err),
      () => console.log('done loading users')
    );
  }

  nextPage($event) {
    this.pageEvent = $event;
    console.log(this.pageEvent.pageIndex);
    if (this.pageEvent.pageIndex > this.lastPageIndex) {
      this.dbService.clearDB();
      this.usersService.getUsers(this.pageEvent.pageIndex.toString(), this.pageEvent.pageSize.toString()).subscribe(
        res => {
          this.users = res['results'];
          console.log(res);
          for (const user of this.users) {
            this.dbService.addUser(user);
          }
          this.dbService.getAllUser().then(usersAdded => {
            console.log(usersAdded);
            this.users = usersAdded;
          });
        },
        err => console.error(err),
        () => console.log('done loading users')
      );
    }
    this.lastPageIndex = this.pageEvent.pageIndex;
  }

  userDetail(user) {
    console.log(user);
    this.router.navigate(['users/detail', user.id]);
  }

}

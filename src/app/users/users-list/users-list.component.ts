import { Component, OnInit } from '@angular/core';
import { User } from '../../core/models/user.model';
import { UsersService } from '../service/users.service';
import { PageEvent } from '@angular/material';
import { DbService } from '../../core/services/db.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: User[];

  // MatPaginator Inputs
  length = 20;
  pageSize = 5;
  pageSizeOptions = [5, 10, 15, 20];
  pageNumber: number;
  pageIndex: number;

  // MatPaginator Output
  pageEvent: PageEvent = new PageEvent();

  constructor(private usersService: UsersService, private dbService: DbService, private router: Router, private route: ActivatedRoute) {
    // Get page number from query params
    this.route.queryParams.subscribe(params => {
      // Defaults to 1 if no query param provided.
      this.pageNumber = params['page'] || 1;
      // Update the page index of the pagination according to page number
      this.pageIndex = this.pageNumber - 1;
      this.getUsersList();
    });
   }

  ngOnInit() {
  }

  /**
   * @author Isaac Burmann
   * @desc Get users list from randomuser api then add to userDB database (indexedDB)
   */
  getUsersList() {
    this.usersService.getUsers(this.pageNumber.toString(), this.pageSize.toString()).subscribe(
      res => {
        this.users = res['results'];
        this.persistUsers();
      },
      err => console.error(err),
      () => console.log('done loading users')
    );
  }

  /**
   * @author Isaac Burmann
   * @desc Navigate the users list with pagination
   */
  nextPage($event) {
    this.pageEvent = $event;
    this.pageNumber = this.pageEvent.pageIndex + 1;
    // Get users list from randomuser api according to page number
    this.usersService.getUsers(this.pageNumber.toString(), this.pageEvent.pageSize.toString()).subscribe(
      res => {
        this.users = res['results'];
        this.persistUsers();
      },
      err => console.error(err),
      () => console.log('done loading users')
    );
  }

  /**
   * @author Isaac Burmann
   * @desc Persist users list on userDB database (indexedDB)
   */
  persistUsers() {
    // Clean the database userDB to make sure it stores only the current users list
    this.dbService.clearDB();
    // Add users to database
    for (const user of this.users) {
      this.dbService.addUser(user);
    }
    // Get all users from database (to list the persisted users with id)
    this.dbService.getAllUser().then(usersAdded => {
      this.users = usersAdded;
    });
  }

  /**
   * @author Isaac Burmann
   * @desc Navigate to user detail page
   */
  userDetail(user) {
    // Passing pageNumber as param, so the back button can go back to same page of pagination
    this.router.navigate(['users/detail', user.id], { queryParams: { page: this.pageNumber } });
  }

}

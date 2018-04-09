import { Component, OnInit } from '@angular/core';
import {User} from '../../core/models/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: User[];

  constructor() { }

  ngOnInit() {
  }

}

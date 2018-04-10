import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit {
  user: User = {
    picture: {
      large: '',
      medium: '',
      thumbnail: ''
    },
    name: {
      first: 'User',
      last: 'Test',
    },
    email: '',
    phone: ''
  };
  isLoggedIn: boolean;
  constructor() { }

  ngOnInit() {
    this.isLoggedIn = false;
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user in
   */
  login() {
    this.isLoggedIn = true;
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user out
   */
  logout() {
    this.isLoggedIn = false;
  }

}

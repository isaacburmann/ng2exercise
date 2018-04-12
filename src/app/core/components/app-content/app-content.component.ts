import {Component, Input, OnInit} from '@angular/core';
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

  @Input() isLoggedIn: boolean;

  constructor() {}

  ngOnInit() {
    this.isLoggedIn = false;
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user in
   */
  login(event) {
    this.isLoggedIn = event;
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user out
   */
  logout() {
    this.isLoggedIn = false;
  }

}

import {Component, Input, OnInit} from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {
  user: User = {
    picture: {
      large: '',
      medium: '',
      thumbnail: ''
    },
    name: {
      first: '',
      last: '',
    },
    email: '',
    phone: ''
  };
  isLoggedIn: boolean;

  @Input() logou;

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
   * @desc Logs the user in
   */
  signup() {
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

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent implements OnInit {

  @Input() isLoggedIn: boolean;
  @Input() user: User;
  @Output() loginChange = new EventEmitter();

  constructor() {}


  ngOnInit() {
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user in
   */
  login() {
    // this.isLoggedIn = event;
    this.loginChange.emit(true);
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user in
   */
  signup() {
    this.loginChange.emit(true);
    // this.isLoggedIn = true;
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user out
   */
  logout() {
    this.loginChange.emit(false);
    // this.isLoggedIn = false;
  }

}

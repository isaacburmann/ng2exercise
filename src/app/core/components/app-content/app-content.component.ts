import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit {

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
    // this.isLoggedIn = true;
    this.loginChange.emit(true);
  }

  /**
   * @author Ahsan Ayaz
   * @desc Logs the user out
   */
  logout() {
    // this.isLoggedIn = false;
    this.loginChange.emit(false);
  }

}

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
   * @author Isaac Burmann
   * @desc Logs the user in
   */
  login() {
    this.loginChange.emit(true);
  }

  /**
   * @author Isaac Burmann
   * @desc Logs the user out
   */
  logout() {
    this.loginChange.emit(false);
  }

}

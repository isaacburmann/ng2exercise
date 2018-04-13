import { Component } from '@angular/core';
import {User} from './core/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLoggedIn = false;
  user: User = {
    picture: {
      large: '',
      medium: '',
      thumbnail: ''
    },
    name: {
      first: 'Isaac',
      last: 'Burmann',
    },
    email: '',
    phone: ''
  };

  loginChanged(event) {
    this.isLoggedIn = event;
  }

}

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Input() logou: boolean;

  @Output() valueChange = new EventEmitter();

  loginChanged() {
    console.log('login')
    this.valueChange.emit(true);
  }

}

import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './backbutton.component.html'
})
export class BackButtonComponent {
  
  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }
}

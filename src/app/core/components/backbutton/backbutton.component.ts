import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-back-button',
  template: `<button mat-button (click)="goBack()">Back</button>`,
})
export class BackButtonComponent {
  @Input()color: string;

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }
}

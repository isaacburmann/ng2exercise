import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  templateUrl: './backbutton.component.html'
})
export class BackButtonComponent {

  @Input() url: string;
  @Input() pageNumber: number;

  constructor(private router: Router) { }

  /**
   * @author Isaac Burmann
   * @desc Navigate to the url passed as param
   */
  goBack() {
    // pass the pageNumber if is not null
    this.router.navigate([this.url], this.pageNumber != null ? { queryParams: { page: this.pageNumber }} : {});
  }
}

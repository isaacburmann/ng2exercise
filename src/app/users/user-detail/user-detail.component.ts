import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../../core/services/db.service';
import { User } from '../../core/models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId: number;
  pageNumber: number;
  user: User;

  constructor(private route: ActivatedRoute, private dbService: DbService) {
    // Get user id from url params
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });
    // Get page number from query params
    this.route.queryParams.subscribe(params => {
      // Defaults to 1 if no query param provided.
      this.pageNumber = params['page'] || 1;
    });
  }

  ngOnInit() {
    // Get user by id from database userDB (IndexedDB)
    this.dbService.getUserById(this.userId).then(user => {
      this.user = user;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../../core/services/db.service';
import {User} from '../../core/models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userId: number;
  user: User;

  constructor(private route: ActivatedRoute, private dbService: DbService) {
    this.route.params.subscribe( params => {
      this.userId = params['id'];
    });
  }

  ngOnInit() {
    this.dbService.getUserById(this.userId).then(user => {
      this.user = user;
    });
  }

}

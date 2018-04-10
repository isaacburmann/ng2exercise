import { TestBed, inject } from '@angular/core/testing';

import { UsersService } from './users.service';
import {User} from '../../core/models/user.model';

describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService]
    });
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));

  let userService: UsersService;
  let users: User[];

  it('returns a list of users', () => {
    userService.getUsers('1', '10').subscribe(result => {
      users = result;
      expect(this.users.length).toBeDefined();
      expect(this.users.length).toBe(10);
    });
  });
});

// Jasmine and Karma test runner will serve as our tools for unit testing.
// I have used the test-driven development approach to build this application.

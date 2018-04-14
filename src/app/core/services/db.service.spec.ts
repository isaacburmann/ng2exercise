import { TestBed, inject } from '@angular/core/testing';

import { DbService } from './db.service';
import {User} from '../models/user.model';

describe('DbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DbService]
    });
  });

  it('should be created', inject([DbService], (service: DbService) => {
    expect(service).toBeTruthy();
  }));

  it('should be open database', inject([DbService], (service: DbService) => {
    expect(service.openDB).toBeTruthy();
  }));

  let user: User;
  user.email = 'test@mail.com';
  user.phone = '2344-2343';
  user.name.first = 'test';
  user.name.last = 'test';
  user.picture.large = 'test';
  user.picture.medium = 'test';
  user.picture.thumbnail = 'test';

  it('should be add user', inject([DbService], (service: DbService) => {
    expect(service.addUser(user)).toBeTruthy();
  }));

  it('should be get user by id', inject([DbService], (service: DbService) => {
    expect(service.getUserById(1)).toBeTruthy();
  }));

  it('should be get all users', inject([DbService], (service: DbService) => {
    expect(service.getAllUser).toBeTruthy();
  }));

  it('should be clear db', inject([DbService], (service: DbService) => {
    expect(service.clearDB).toBeTruthy();
  }));

});

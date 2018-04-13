import { Injectable } from '@angular/core';
import { AngularIndexedDB } from 'angular2-indexeddb';
import { User } from '../models/user.model';

@Injectable()
export class DbService {

  db = new AngularIndexedDB('usersDb', 1);

  constructor() {
    this.db.openDatabase(1, (evt) => {
      let objectStore = evt.currentTarget.result.createObjectStore(
        'user', { keyPath: "id", autoIncrement: true });
      objectStore.createIndex("email", "email", { unique: true });
    });
  }

  public getUserByid(userId: number): Promise<User> {
    return this.db.getByKey('user', userId).then(user => {
      return user;
    }, (error) => {
      console.log(error);
    });
  }

  public getAllUser(): Promise<User[]> {
    return this.db.getAll('user').then(users => {
      return users;
    }, (error) => {
      console.log(error);
    });
  }

  public addUser(user: User) {
    this.db.add('user', user).then(result => {
      // Do something after the value was added
      console.log('User added');
    }, (error) => {
      console.log(error);
    });
  }

  public clearDB() {
    this.db.clear('user').then(() => {
      // Do something after clear
      console.log('DB cleared');
    }, (error) => {
      console.log(error);
    })
  }

}

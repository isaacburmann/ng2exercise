import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AngularIndexedDB } from 'angular2-indexeddb/angular2-indexeddb';

@Injectable()
export class DbService {

  // Create a new database called userDB
  db = new AngularIndexedDB('userDB', 1);

  constructor() {
    this.db.openDatabase(1, (evt) => {
      // Create a table called user with id as key and email as Index
      const objectStore = evt.currentTarget.result.createObjectStore(
        'user', { keyPath: 'id', autoIncrement: true });
      objectStore.createIndex('email', 'email', { unique: true });
      objectStore.createIndex('id', 'id', { unique: true });
    });
  }

  /**
   * @author Isaac Burmann
   * @desc Open the database userDB
   */
  public openDB(): Promise<any> {
    return this.db.openDatabase(1, (evt) => {
      console.log('Database opened');
    });
  }

  /**
   * @author Isaac Burmann
   * @desc Get a user by id
   */
  public getUserById(userId): Promise<User> {
    return this.openDB().then(() => {
      return this.db.getByKey('user', +userId).then(user => {
        return user;
      }, (error) => {
        console.log(error);
      });
    });
  }

  /**
   * @author Isaac Burmann
   * @desc Get all users
   */
  public getAllUser(): Promise<User[]> {
    return this.openDB().then(() => {
      return this.db.getAll('user').then(users => {
        return users;
      }, (error) => {
        console.log(error);
      });
    });
  }

  /**
   * @author Isaac Burmann
   * @desc Add a user
   */
  public addUser(user: User) {
    return this.openDB().then(() => {
      this.db.add('user', user).then(result => {
        // Do something after the value was added
        console.log('User added');
      }, (error) => {
        console.log(error);
      });
    });
  }

  /**
   * @author Isaac Burmann
   * @desc Clear all database data
   */
  public clearDB() {
    return this.openDB().then(() => {
      this.db.clear('user').then(() => {
        // Do something after clear
        console.log('DB cleared');
      }, (error) => {
        console.log(error);
      });
    });
  }

}
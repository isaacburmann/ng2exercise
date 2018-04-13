import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from '../../core/models/user.model';

const urlUserApi = 'https://randomuser.me/api/';

@Injectable()
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers(page: string, results: string) {
    let params = new HttpParams();
    params = params.append('page', page);
    params = params.append('results', results);
    params = params.append('inc', 'picture, name, phone, email');
    return this.httpClient.get<User[]>(urlUserApi, {params: params});
  }

}

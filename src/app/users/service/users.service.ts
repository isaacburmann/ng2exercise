import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from '../../core/models/user.model';

const urlUserApi = 'https://randomuser.me/api/';

@Injectable()
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers(page: string, results: string) {
    const params = new HttpParams();
    params.append('page', page);
    params.append('results', results);
    return this.httpClient.get<User[]>(urlUserApi, {params: params});
  }

}

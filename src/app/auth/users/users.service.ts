import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDataType } from './users.types';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  API_URL = 'https://dummyjson.com/users';

  users: UserDataType[] = [];

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<{ users: UserDataType[] }>(this.API_URL);
  }
}

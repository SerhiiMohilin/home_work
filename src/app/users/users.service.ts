import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserType } from './users.types';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_URL: string = 'https://jsonplaceholder.typicode.com/users';

  users: Array<UserType> = [];

  constructor(private http: HttpClient) {
  }

  saveUsersToLS(users: UserType[] = this.users) {
    if (users?.length) {
      const stringifiedUsers = JSON.stringify(users);
      localStorage.setItem('users', stringifiedUsers);
    }
  }

  getUsersFromLS(): UserType[] | null {
    const lsUsers = localStorage.getItem("users");
    if (lsUsers) {

      const parsedUsers: UserType[] = JSON.parse(lsUsers);

      return parsedUsers;
    }
    return null;
  }

  getUsers() {
    const potentialLSUsers = this.getUsersFromLS()
    if (potentialLSUsers) {
      this.users = potentialLSUsers;
      return;
    }

    this.http.get<UserType[]>(this.API_URL).subscribe((data) => {
      this.users = data;
    });
  }

  getUserById(id: string) {
    return this.http.get<UserType>(`${this.API_URL}/${id}`);
  }

  deleteUserById(id: string) {
    return this.http.delete<UserType>(`${this.API_URL}/${id}`);
  }
}

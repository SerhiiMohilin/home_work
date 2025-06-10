import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignedUserDataType, SignInDataType } from './auth.types';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_URL = 'https://dummyjson.com/auth';
  authUserData: SignedUserDataType | null = null;

  constructor(private http: HttpClient) { }

  signIn(signInData: SignInDataType) {
    return this.http.post<SignedUserDataType>(`${this.API_URL}/login`, signInData)
      .pipe(
        tap((data) => this.authUserData = data)
      );
  }

}
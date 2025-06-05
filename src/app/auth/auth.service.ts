import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignInDataType } from './auth.types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = 'https://dummyjson.com/auth';

  constructor(private http: HttpClient) { }

  signIn(signInData: SignInDataType) {
    return this.http.post(`${this.API_URL}/login`, signInData)
  }
}

import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { stringify } from 'querystring';
import { tokenName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
private token: string;

get getToken(): string {

  return this.token;
}
  constructor(private apiService: ApiService) {}

   async signUp(username: string, password: string): Promise<any> {
     return await this.apiService.post('auth/signup',
     {
       username,
       password
     });
   }
   async logIn(username: string, password: string): Promise<any> {
    const responce = await this.apiService.post('auth/login',
    {
      username,
      password
    });
    this.token = responce.token;
   }
   isAuthenticated(): boolean {
    return this.getToken !== undefined;
  }
}

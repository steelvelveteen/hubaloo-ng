import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

type UserType = {
  _id: number;
  email: string;
  password: string;
};

type LoginResponseType = {
  message: string,
  user_id: string,
  email: string,
  token: string
};

type CredentialsType = {
  email: string;
  password: string;
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private dataService: DataService) { }

  Login = (credentials: CredentialsType): Observable<LoginResponseType> => this.dataService.Post(credentials, '/auth/login');

  isLoggedIn = (): boolean => {
    const token = JSON.parse(localStorage.getItem('token'));
    return !!token;
  }

  logout = (): void =>
    localStorage.removeItem('token')
}

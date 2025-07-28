import { inject, Injectable } from '@angular/core';
import { User } from '../model/user.type';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../model/authResponse.type';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  http = inject(HttpClient);
  //http://localhost:8080/swagger-ui/index.html
  //Enable CORS in backend when different ip:port!!

  register(user : User) {
    const url = `http://localhost:8080/auth/register`;
    return this.http.post<User>(url, user)
  }

  login(user : User) {
    const url = `http://localhost:8080/auth/login`;
    return this.http.post<User>(url, user);
  }

  logout(username : string) {
    const url = `http://localhost:8080/auth/logout`;
    return this.http.post<String>(url, username);
  }

  userLogged() {
    const loginData = localStorage.getItem('loginData');
    if(loginData == null)
      return '';
    return JSON.parse(loginData).username;
  }

  isLoggedIn() {
    const loginData = localStorage.getItem('loginData');
    if(loginData == null)
      return false;
    return true;
  }

  storeToken(loginData: any) {
    localStorage.setItem('loginData', JSON.stringify(loginData));
  }
  
  deleteToken() {

    localStorage.removeItem('loginData');
  }
}

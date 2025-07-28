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

  storeToken(auth:AuthResponse) {
    localStorage.setItem('ìd_token', auth.jwt);
    localStorage.setItem('expires_at', auth.expiration);
  }
  deleteToken() {
    localStorage.removeItem('ìd_token');
    localStorage.removeItem('expires_at');
  }
}

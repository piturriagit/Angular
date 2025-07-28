import { Component, OnInit, signal } from '@angular/core';
import { LoginForm } from '../components/login-form/login-form';
import { User } from '../model/user.type';
import { AuthResponse } from '../model/authResponse.type';
import { AuthService } from '../services/auth-service';
import { catchError } from 'rxjs';
import { Feedback } from "../components/feedback/feedback";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule, Feedback],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {
  label = ['Login', 'Sign Up'];
  alternate = [this.label[1], this.label[0]];
  isRegister = signal(0);
  feedback = signal(''); 
  userLogged = signal('');
  formUsername = '';
  formPassword = '';

  user : User = { username:'', password:''};
  auth : AuthResponse = { "username": '', jwt: '', expiration : ''}

  constructor(private authService: AuthService) { };
   
  onAlternate() {
    this.isRegister.set(this.isRegister() === 0 ? 1 : 0);
  }

  onRegister() {
    console.log(`register (${this.formUsername}, ${this.formPassword})... `);
    this.user.username=this.formUsername;
    this.user.password=this.formPassword;
    this.authService.login(this.user)
      .pipe(catchError(error => {
        console.error(`ERROR while REGISTRATION ${this.user.username}: ${error}`);
        throw error;
      } ))
      .subscribe( (res:any) => {
        this.auth=res;
        this.authService.storeToken(res);     //Store token in browser
        this.userLogged.set(this.user.username);
        console.log(`POST register: ${res}`);
    });
  };

  onLogin() {
    console.log(`login (${this.formUsername}, ${this.formPassword})... `);
    this.user.username=this.formUsername;
    this.user.password=this.formPassword;
    this.authService.login(this.user)
      .pipe(catchError(error => {
        console.error(`ERROR while LOGIN ${this.user.username}: ${error}`);
        throw error;
      } ))
      .subscribe( (res:any) => {
        this.auth=res;
        this.authService.storeToken(res)     //Store token in browser
        this.userLogged.set(this.user.username);
        console.log(`POST login: ${res}`);
    });
  };

  onLogout() {
    console.log(`logout (${this.formUsername}... `);
    this.authService.deleteToken();        //Remove token from browser
    this.userLogged.set('');
    this.user.username=this.formUsername;
/*    this.authService.logout(this.user.username)
      .pipe(catchError(error => {
        console.error(`ERROR while LOGOUT ${this.user.username}: ${error}`);
        this.resultImage.set('sorry.png');
        this.resultTitle.set('Logout Error');
        this.resultMessage.set('');
        this.resultWarning = signal('');
        throw error;
      } ))
      .subscribe( (res:any) => {
        this.auth=res;
        console.log(`POST logout: ${res}`);
        this.resultImage.set('bt_logout.png');
        this.resultTitle.set('Logout Successful');
        this.resultMessage.set(`Bye ${this.user.username}!`);
        this.resultWarning.set('');
    });
    */
  };
}

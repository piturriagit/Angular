import { Component, input, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../model/user.type';
import { catchError } from 'rxjs';
import { AuthService } from '../../services/auth-service';
import { Feedback } from "../feedback/feedback";
import { AuthResponse } from '../../model/authResponse.type';


@Component({
  selector: 'app-login-form',
  imports: [FormsModule, Feedback],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginForm implements OnInit {
  isRegister = input(false);
  userLogged = signal('');
  formUsername = '';
  formPassword = '';
  resultImage = signal('');
  resultTitle = signal('');
  resultMessage = signal('');
  resultWarning = signal('');

  user : User = { username:'', password:''};
  auth : AuthResponse = { "username": '', jwt: '', expiration : ''}

  constructor(private authService: AuthService) { };
  
  ngOnInit(): void {
      this.userLogged.set(this.authService.userLogged());
  }

  register() {
    console.log(`register (${this.formUsername}, ${this.formPassword})... `);
    this.user.username=this.formUsername;
    this.user.password=this.formPassword;
    this.authService.login(this.user)
      .pipe(catchError(error => {
        console.error(`ERROR while REGISTRATION ${this.user.username}: ${error}`);
        this.resultImage.set('sorry.png');
        this.resultTitle.set('Register Error');
        this.resultMessage.set('');
        this.resultWarning = signal('');
        throw error;
      } ))
      .subscribe( (res:any) => {
        this.auth=res;
        this.authService.storeToken(res);     //Store token in browser
        this.userLogged.set(this.user.username);
        console.log(`POST register: ${res}`);
        this.resultImage.set('bt_login.png');
        this.resultTitle.set(`Wellcome ${this.user.username}`);
        this.resultMessage.set(`Your token expires at ${res.expiration}`);   //print expiration
        this.resultWarning.set(res.jwt);      //print token
    });
  };

  login() {
    console.log(`login (${this.formUsername}, ${this.formPassword})... `);
    this.user.username=this.formUsername;
    this.user.password=this.formPassword;
    this.authService.login(this.user)
      .pipe(catchError(error => {
        console.error(`ERROR while LOGIN ${this.user.username}: ${error}`);
        this.resultImage.set('sorry.png');
        this.resultTitle.set('Login Error');
        this.resultMessage.set('');
        this.resultWarning = signal('');
        throw error;
      } ))
      .subscribe( (res:any) => {
        this.auth=res;
        this.authService.storeToken(res)     //Store token in browser
        this.userLogged.set(this.user.username);
        console.log(`POST login: ${res}`);
        this.resultImage.set('bt_login.png');
        this.resultTitle.set(`Hello ${this.user.username}`);
        this.resultMessage.set(`Your token expires at ${res.expiration}`);   //print expiration
        this.resultWarning.set(res.jwt);      //print token
    });
  };

  logout() {
    console.log(`logout (${this.formUsername}... `);
    this.authService.deleteToken();        //Remove token from browser
    this.userLogged.set('');
    this.user.username=this.formUsername;
            this.resultImage.set('bt_logout.png');
        this.resultTitle.set('Logout Successful');
        this.resultMessage.set(`Bye ${this.user.username}!`);
        this.resultWarning.set('');
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

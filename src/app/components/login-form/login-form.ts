import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { User } from '../../model/user.type';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule, NgModel],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginForm {
  user : User = { username:'', password:''};
  login() {
    console.log(`login (${this.user.username}, ${this.user.password})... `)
  }  

}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../model/user.type';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginForm {
  user : User = { username:'', password:''};
  login() {
    console.log(`login (${this.user.username}, ${this.user.password})... `);
    debugger;
    const formValue = this.user;
  }  

}

import { Component, signal } from '@angular/core';
import { LoginForm } from '../components/login-form/login-form';

@Component({
  selector: 'app-authentication',
  imports: [LoginForm],
  templateUrl: './authentication.html',
  styleUrl: './authentication.css'
})
export class Authentication {
  isRegister = signal(false);
  goLogin() {
    this.isRegister.set(false);
  }
  goRegister() {
    this.isRegister.set(true);
  }
}

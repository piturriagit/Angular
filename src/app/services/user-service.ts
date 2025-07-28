import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private loggedUser = new BehaviorSubject<string>('');
  loggedUser$ = this.loggedUser.asObservable();

  updateUser(user: string) {
    this.loggedUser.next(user);
  }
}
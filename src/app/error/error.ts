import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-error',
  imports: [],
  templateUrl: './error.html',
  styleUrl: './error.css'
})
export class Error {
  protected readonly title = signal('Tasks Manager');
  ticket = signal('mailto:patricia.iturriaganez@gmail.com?subject=Task%20Manager%20[Incident]%20-%20');
}

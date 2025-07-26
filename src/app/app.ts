import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly appName = signal('Tasks Manager');
  today = signal(new Date('2025/07/29'));
  constructor() {
    setInterval(()=>{
      this.today.set(new Date());
    }, 1000 * 3600);
  }
}

import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [DatePipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  author = input('unknown');
  now:Date = new Date(); 
  constructor(){
    setInterval(() => {
      this.now = new Date()
    }, 3600000)
  }
}

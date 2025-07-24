import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card-task',
  imports: [DatePipe],
  templateUrl: './card-task.html',
  styleUrl: './card-task.css'
})
export class CardTask {
  title = "title";
  description = "description";
  date = new Date();
}

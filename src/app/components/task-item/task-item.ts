import { Component, input } from '@angular/core';
import { Task } from '../../model/task.type';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [DatePipe],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItem {
  task = input.required<Task>();
}

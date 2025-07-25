import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Task } from '../../model/task.type';

@Component({
  selector: 'app-task-item',
  imports: [DatePipe],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItem {
/*  id = input(0);
  title = input('none');
  description = input('none');
  date = input(Date.parse("January 1, 2025"));
  */
 task = input<Task>({id:0, title:'none', description:'none', creationDate:new Date()});
}

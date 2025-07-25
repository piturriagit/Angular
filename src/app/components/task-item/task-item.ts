import { Component, input, signal } from '@angular/core';
import { Task } from '../../model/task.type';
import { DatePipe } from '@angular/common';
import { ImageIcon } from '../image-icon/image-icon';

@Component({
  selector: 'app-task-item',
  imports: [DatePipe, ImageIcon],
  templateUrl: './task-item.html',
  styleUrl: './task-item.css'
})
export class TaskItem {
  task = input.required<Task>();
  buttonEdit = signal('bt_edit.png');
    buttonDelete = signal('bt_bin.png');
  editTask() {
    console.log(`Calling PUT tasks api for ${this.task().id}...`);
  }
  deleteTask() {
    console.log(`Calling DELETE tasks api for ${this.task().id}...`);
  }
}

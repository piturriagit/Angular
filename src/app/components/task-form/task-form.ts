import { Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../model/task.type';
import { ImageIcon } from '../image-icon/image-icon';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule, ImageIcon],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css'
})
export class TaskForm {
  buttonOk = signal('bt_ok_light.png');
  buttonCancel = signal('bt_cancel.png');
  task = signal<Task>(
    {id:0, title:'', description:'', creationDate: new Date('2025/07/29') }
  );

  addTask() {
    console.log(`new task to add: ${this.task().id} ${this.task().title} - ${this.task().description} (${this.task().creationDate}) `);
  }
  cancel() {
    console.log("Going back to home page...");
  }
}

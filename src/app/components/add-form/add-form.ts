import { Component, inject, signal } from '@angular/core';
import { ImageIcon } from '../image-icon/image-icon';
import { TaskForm } from "../task-form/task-form";
import { TasksService } from '../../services/tasks-service';
import { Task } from '../../model/task.type';

@Component({
  selector: 'app-add-form',
  imports: [ImageIcon, TaskForm],
  templateUrl: './add-form.html',
  styleUrl: './add-form.css'
})
export class AddForm {
  tasksService = inject(TasksService);
  task =  signal<Task>({
    id:0, 
    title:'none', 
    description:'none', 
    creationDate:new Date('2025/01/01')
  });  //fake task

  buttonAdd = signal('bt_add.png');
  buttonOk = signal('bt_ok_light.png');
  buttonCancel = signal('bt_cancel.png');
  visible = signal(false);
  
  switchVisibility() {
    this.visible.update( visible => !visible);
  }
  addTask() {
    console.log(`Calling post tasks api ${this.task().id} ${this.task().title} - ${this.task().description} (${this.task().creationDate})`);
    this.visible.update( visible => !visible);
  }
}

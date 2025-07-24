import { Component } from '@angular/core';
import { TaskForm } from "../task-form/task-form";

@Component({
  selector: 'app-new-task',
  imports: [TaskForm],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {

}

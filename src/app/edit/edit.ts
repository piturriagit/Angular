import { Component } from '@angular/core';
import { TaskForm } from "../components/task-form/task-form";

@Component({
  selector: 'app-edit',
  imports: [TaskForm],
  templateUrl: './edit.html',
  styleUrl: './edit.css'
})
export class Edit {

}

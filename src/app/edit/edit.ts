import { Component, signal } from '@angular/core';
import { TaskForm } from "../components/task-form/task-form";
import { RouterLink } from '@angular/router';
import { ImageIcon } from '../components/image-icon/image-icon';
import { Form } from '../components/form/form';

@Component({
  selector: 'app-edit',
  imports: [Form,RouterLink],
  templateUrl: './edit.html',
  styleUrl: './edit.css'
})
export class Edit {
  buttonOk = signal('bt_ok.png');
  buttonCancel = signal('bt_cancel.png');
  updateTask() {
    console.log("Calling put tasks api...");
  }
}

import { Component, signal } from '@angular/core';
import { Task } from '../../model/task.type';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ImageIcon } from '../image-icon/image-icon';

@Component({
  selector: 'app-form',
  imports: [FormsModule, ImageIcon],
  templateUrl: './form.html',
  styleUrl: './form.css'
})

export class Form {
  task = {title:'', description:''};
  minChars:number = 3;
  buttonSubmit = signal('bt_ok.png');
  buttonCancel = signal('bt_cancel.png');
  buttonReset = signal('bt_reset.png');

  taskForm = new FormGroup({
    title: new FormControl(this.task.title, [
      Validators.required,
      Validators.minLength(3)
    ]),
    description: new FormControl(this.task.description)
  });
  get title() {
    return this.taskForm.get('title');
  }
  goHome() {
    console.log('going back Home...');
  }
}

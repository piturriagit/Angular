import { Component, signal } from '@angular/core';
import { ImageIcon } from '../image-icon/image-icon';
import { TaskForm } from "../task-form/task-form";

@Component({
  selector: 'app-add-form',
  imports: [ImageIcon, TaskForm],
  templateUrl: './add-form.html',
  styleUrl: './add-form.css'
})
export class AddForm {
  buttonAdd = signal('bt_add.png');
  buttonOk = signal('bt_ok_light.png');
  buttonCancel = signal('bt_cancel.png');
  visible = signal(false);
  changeVisibility() {
    this.visible.update( visible => !visible);
  }
  newTask() {
    console.log("Calling post tasks api...");
  }
}

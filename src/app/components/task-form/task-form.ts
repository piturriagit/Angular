import { Component, signal } from '@angular/core';
import { ButtonsPanel } from "../buttons-panel/buttons-panel";

@Component({
  selector: 'app-task-form',
  imports: [ButtonsPanel],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css'
})
export class TaskForm {
  btOk = signal('bt_ok_light.png');
  btCancel = signal('bt_cancel.png');
}

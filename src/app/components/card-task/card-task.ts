import { DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ButtonsPanel2 } from '../buttons-panel2/buttons-panel2';

@Component({
  selector: 'app-card-task',
  imports: [DatePipe, ButtonsPanel2],
  templateUrl: './card-task.html',
  styleUrl: './card-task.css'
})
export class CardTask {
  title = "title";
  description = "description";
  date = new Date();
  btOk = signal('bt_ok.png');
  btCancel = signal('bt_cancel.png');
}

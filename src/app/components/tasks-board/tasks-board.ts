import { Component } from '@angular/core';
import { CardTask } from "../card-task/card-task";

@Component({
  selector: 'app-tasks-board',
  imports: [CardTask],
  templateUrl: './tasks-board.html',
  styleUrl: './tasks-board.css'
})
export class TasksBoard {

}

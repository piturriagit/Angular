import { Component } from '@angular/core';
import { NewTask } from '../components/new-task/new-task';
import { CardTask } from '../components/card-task/card-task';
import { TasksBoard } from "../components/tasks-board/tasks-board";

@Component({
  selector: 'app-home',
  imports: [NewTask, CardTask, TasksBoard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}

import { Component } from '@angular/core';
import { AddForm } from "../components/add-form/add-form";
import { TasksBoard } from "../components/tasks-board/tasks-board";

@Component({
  selector: 'app-home',
  imports: [AddForm, TasksBoard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}

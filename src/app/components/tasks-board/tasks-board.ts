import { Component, inject, OnInit, signal } from '@angular/core';
import { TasksService } from '../../services/tasks-service';
import { Task } from '../../model/task.type';
import { DatePipe } from '@angular/common';
import { catchError } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { TaskItem } from '../task-item/task-item';

@Component({
  selector: 'app-tasks-board',
  imports: [TaskItem],
  templateUrl: './tasks-board.html',
  styleUrl: './tasks-board.css'
})
export class TasksBoard implements OnInit {
  tasksService = inject(TasksService);
  tasksList = signal<Array<Task>>([]);  //empty by default
/*  today = signal<Date>(new Date());
  constructor(private router: Router) { //initialize router for redirection
    setInterval(() => {                 //set interval for today updates
      this.today.set(new Date())
    }, 1000)
  }
*/  
  constructor(private router: Router) {};
  ngOnInit(): void {
    console.log(this.tasksService);
    this.tasksService.getTasksFromApi()
      .pipe(catchError(error => {
        console.error(error);
        this.router.navigate(['/error']);
        throw error;
      } ))
      .subscribe(list => this.tasksList.set(list)); //on load GET tasks to api
  }
}

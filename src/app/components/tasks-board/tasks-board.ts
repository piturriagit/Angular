import { Component, inject, OnInit, signal } from '@angular/core';
import { TasksService } from '../../services/tasks-service';
import { Task } from '../../model/task.type';
import { DatePipe } from '@angular/common';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-tasks-board',
  imports: [DatePipe],
  templateUrl: './tasks-board.html',
  styleUrl: './tasks-board.css'
})
export class TasksBoard implements OnInit {
    tasksService = inject(TasksService);
    tasksList = signal<Array<Task>>([]);  //empty by default
    
    ngOnInit(): void {
      console.log(this.tasksService);
      this.tasksService.getTasksFromApi()
        .pipe(catchError(error => {
          console.error(error);
          throw error;
        } ))
        .subscribe(list => this.tasksList.set(list)); //on load GET tasks to api
  }
}

import { inject, Injectable } from '@angular/core';
import { Task } from '../model/task.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  http = inject(HttpClient);
  getTasksFromApi() {
    const url = `http://localhost:8080/tasks`;  //Enable CORS in backend if different ip:port!!
    return this.http.get<Array<Task>>(url);
  }
  postTaskFromApi(task:Task) {
    const url = `http://localhost:8080/tasks`;  //Enable CORS in backend if different ip:port!!
    return this.http.post<Array<Task>>(url, task);
  }
}

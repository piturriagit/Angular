import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Task } from '../model/task.type';
import { Router } from '@angular/router';
import { TasksService } from '../services/tasks-service';
import { catchError } from 'rxjs';
import { ImageIcon } from '../components/image-icon/image-icon';
import { DatePipe } from '@angular/common';
import { Feedback } from "../components/feedback/feedback";

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule, ImageIcon, DatePipe, Feedback],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  isLoading = signal(false);
  loadingImage = signal("waiting.png");
  loadingMessage = signal("Loading...");
  nolistImage = signal("congrats.png");
  nolistMessage = signal("You are up to date!!");
  isFormVisible = signal(false);
  buttonAdd = signal('bt_add.png');
  buttonEdit = signal('bt_edit.png');
  buttonDelete = signal('bt_delete.png');
  buttonDeleteAll = signal('bt_delete2.png');
  buttonSave = signal('bt_save.png');
  buttonReset = signal('bt_reset.png');
  buttonCancel = signal('bt_cancel.png');

  minChars = signal(3);
  private emptyTask: Task = {id:0, title:"", description:"", creationDate:new Date()};
  form: FormGroup = new FormGroup({
    id : new FormControl(this.emptyTask.id),
    title : new FormControl(this.emptyTask.title,[Validators.required,Validators.minLength(this.minChars())]),
    description : new FormControl(this.emptyTask.description),
    creationDate : new FormControl(this.emptyTask.creationDate)
  });

  //Validators.email, Validators.pattern("")
  tasksList: Array<Task> = [];
  task: Task = {
    id : 0,
    title : '',
    description : '',
    creationDate : new Date('2025/07/29')
  }

  constructor(private router: Router, private service: TasksService) { 
    this.form.controls['id'].disable();
    this.loadTasksList();
  };

  loadTasksList() {
    this.isLoading.set(true);
    this.service.getTasks()
      .pipe(catchError(error => {
        console.error(`ERROR while GET tasks: ${error}`);
        this.router.navigate(['/error']);
        throw error;
      } ))
      .subscribe( (res:any) => {
        this.tasksList=res;
        console.log(`GET tasks: ${res}`);
        this.isLoading.set(false);
    })
  }
  addTask() {
    this.service.postTask(this.task)
      .pipe(catchError(error => {
        console.error(`ERROR while POST task ${this.task.title}: ${error}`);
        this.router.navigate(['/error']);
        throw error;
      } ))
      .subscribe( (res:any) => {
        console.log(`POST task ${this.task.title}: ${res}`);
        this.loadTasksList();
        this.hideForm();
    });
  };

  editThisTask(item: any) {
    this.task=item;
    this.showForm();
  }
  updateTask() {
    this.service.putTask(this.task)
      .pipe(catchError(error => {
        console.error(`ERROR while PUT task ${this.task.title}: ${error}`);
        this.router.navigate(['/error']);
        throw error;
      } ))
      .subscribe( (res:any) => {
        console.log(`PUT task ${this.task.id}-${this.task.title}: ${res}`);
        this.loadTasksList();
        this.hideForm();
      });
  };

  deleteThisTask(item:any) {
    if (! confirm(`⚠️ Are you sure you want to delete the task: ${item.title}?`) ) {
      console.log('Delete action cancel by user');
      return;
    }
    this.service.deleteTask(item.id)
      .pipe(catchError(error => {   
        console.error(`ERROR while DELETE task ${item.title}: ${error}`);
        this.router.navigate(['/error']);
        throw error;
      } ))
      .subscribe( (res:any) => {
        console.log(`DELETE task ${item.id}-${item.title}: ${res}`);
        this.loadTasksList();
      });
  };

  deleteList() {
    if (! confirm(`‼️ This will erase ALL your tasks! \nAre you sure you want to delete then?`) ) {
      console.log('Delete action cancel by user');
      return;
    }
    this.service.deleteTasks()
      .pipe(catchError(error => {   
        console.error(`ERROR while DELETE tasks: ${error}`);
        this.router.navigate(['/error']);
        throw error;
      } ))
      .subscribe( (res:any) => {
        console.log(`DELETE tasks: ${res}`);
        this.loadTasksList();
      });
  };

  resetTaks() {
    this.task.id=this.emptyTask.id;
    this.task.title=this.emptyTask.title;
    this.task.description=this.emptyTask.description;
    this.task.creationDate=this.emptyTask.creationDate;
  }

  cancel() {
    this.loadTasksList();
    this.hideForm();
  };

  hideForm() {
    this.isFormVisible.set(false);
  }
  showForm() {
    this.isFormVisible.set(true);
  }
  newTask() {
    this.resetTaks();   //clean data in form (after save, cancel, edit...)
    this.isFormVisible.update( isFormVisible => !isFormVisible);
  }
}

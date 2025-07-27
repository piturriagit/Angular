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
  isNew = signal(true);
  buttonAdd = signal('bt_add.png');
  altAdd = signal('Add new task');
  buttonEdit = signal('bt_edit.png');
  altEdit = signal('Edit this task');
  buttonDelete = signal('bt_delete.png');
  altDelete = signal('Delete this task');
  buttonDeleteAll = signal('bt_delete2.png');
  altDeleteAll = signal('Delete all tasks!!');
  buttonSave = signal('bt_save.png');
  altSaveAdd = signal('Save new task');
  altSaveEdit = signal('Update task');
  buttonCancel = signal('bt_cancel.png');
  altCancel = signal('Close');

  minChars = signal(3);
  maxChars = signal(255); //max on database
  form: FormGroup = new FormGroup({
    id : new FormControl(0, [Validators.required]),
    title : new FormControl('',[Validators.required,Validators.minLength(this.minChars())]),
    description : new FormControl(''),
    creationDate : new FormControl(new Date())
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
  newTask() {
    this.isNew.set(true);
    this.resetForm();
    this.isFormVisible.update( isFormVisible => !isFormVisible);
  }
  editThisTask(item: any) {
    this.task.id=item.id;
    this.task.title=item.title;
    this.task.description=item.description;
    this.isNew.set(false);
    this.showForm();
  }
  resetForm() {
    this.task.title='';
    this.task.description='';
    this.task.creationDate=new Date();
    this.form.controls['title'].markAsUntouched();
    this.form.controls['title'].markAsPristine();
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

  deleteTasksList() {
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
}

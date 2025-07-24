import { Component } from '@angular/core';
import { NewTask } from '../components/new-task/new-task';
import { CardTask } from '../components/card-task/card-task';

@Component({
  selector: 'app-home',
  imports: [NewTask, CardTask],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}

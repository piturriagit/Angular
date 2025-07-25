import { Component } from '@angular/core';
import { SearchBar } from '../components/search-bar/search-bar';
import { AddForm } from "../components/add-form/add-form";

@Component({
  selector: 'app-home',
  imports: [SearchBar, AddForm],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}

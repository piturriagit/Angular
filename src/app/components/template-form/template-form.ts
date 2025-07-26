import { NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, NgIf],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css'
})
export class TemplateForm {

  obj: any = {
    firstName: '',
    lastName: '',
    username: '',
    city: '',
    state: 'option1',
    zipCode: '',
    isAgreed: false
  }
  minChars = signal<number>(3);

  onSave() {
    debugger;
    const formValue = this.obj;
  }

}
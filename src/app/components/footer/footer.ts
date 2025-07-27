import { DatePipe } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { ImageIcon } from "../image-icon/image-icon";

@Component({
  selector: 'app-footer',
  imports: [DatePipe, ImageIcon],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  author = input('default');
  authorContact = input('default');
  imageMail = signal('bt_gmail.png');
  altMail = signal('contact me');
  authorLinkedin = input('default');
  imageLinkedin = signal('bt_linkedin.png');
  altLinkedin = signal('my profile');
  today = input(new Date());
}

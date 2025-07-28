import { Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImageIcon } from "../image-icon/image-icon";

@Component({
  selector: 'app-header',
  imports: [RouterLink, ImageIcon],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  authImage= signal('bt_auth.png');
  authAlt= signal('Authentication');
  appName = input('Default app title');
}
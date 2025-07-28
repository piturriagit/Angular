import { Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ImageIcon } from "../image-icon/image-icon";
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, ImageIcon],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  
  constructor(private authService: AuthService) { };
  authImage= signal('bt_auth.png');
  authAlt= signal('Authentication');
  appName = input('Default app title');
}
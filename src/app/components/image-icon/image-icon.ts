import { Component, input, signal, Signal } from '@angular/core';
import { DisableSubmit } from '../../directives/disable-submit';

@Component({
  selector: 'app-image-icon',
  imports: [DisableSubmit],
  templateUrl: './image-icon.html',
  styleUrl: './image-icon.css'
})
export class ImageIcon {
  imageSrc = input('bt_search.png');
  clickFunction = input('console.error("You made a mistake");');
}

import { Component, signal } from '@angular/core';
import { ImageIcon } from "../image-icon/image-icon";

@Component({
  selector: 'app-search-bar',
  imports: [ImageIcon],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
  keyword = signal(null); 
  image = signal('bt_search.png');
  keyUpHandler(event: KeyboardEvent) {
    console.log(`user typed in the input: ${event.key} key` );
  };
}

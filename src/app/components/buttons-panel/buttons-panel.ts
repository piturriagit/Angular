import { Component, input } from '@angular/core';

@Component({
  selector: 'app-buttons-panel',
  imports: [],
  templateUrl: './buttons-panel.html',
  styleUrl: './buttons-panel.css'
})
export class ButtonsPanel {
  btOk = input('bt_ok.png');
  btCancel = input('bt_cancel.png');
}

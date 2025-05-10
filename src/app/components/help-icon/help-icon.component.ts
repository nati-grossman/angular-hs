import { Component, Input } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-help-icon',
  standalone: true,
  imports: [PopupComponent],
  templateUrl: './help-icon.component.html',
  styleUrl: './help-icon.component.scss',
})
export class HelpIconComponent {
  @Input() title: string = '';
  @Input() message: string = '';
  popupOpen = false;

  openPopup() {
    this.popupOpen = true;
  }
  closePopup() {
    this.popupOpen = false;
  }
}

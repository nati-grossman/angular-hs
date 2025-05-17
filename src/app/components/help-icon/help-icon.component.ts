import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-help-icon',
  standalone: true,
  imports: [CommonModule, TranslateModule, PopupComponent],
  templateUrl: './help-icon.component.html',
  styleUrls: ['./help-icon.component.scss'],
})
export class HelpIconComponent {
  @Input() title: string = '';
  @Input() message: string = '';
  showPopup = false;

  openPopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }
}

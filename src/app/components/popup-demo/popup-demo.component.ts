import { Component } from '@angular/core';
import { HelpIconComponent } from '../help-icon/help-icon.component';

@Component({
  selector: 'app-popup-demo',
  standalone: true,
  imports: [HelpIconComponent],
  templateUrl: './popup-demo.component.html',
  styleUrl: './popup-demo.component.scss',
})
export class PopupDemoComponent {}

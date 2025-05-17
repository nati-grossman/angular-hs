import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HelpIconComponent } from '../help-icon/help-icon.component';

@Component({
  selector: 'app-popup-demo',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, HelpIconComponent],
  templateUrl: './popup-demo.component.html',
  styleUrls: ['./popup-demo.component.scss'],
})
export class PopupDemoComponent {}

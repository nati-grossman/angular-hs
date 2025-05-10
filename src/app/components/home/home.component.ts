import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(public translate: TranslateService) {}

  switchLang() {
    const nextLang = this.translate.currentLang === 'he' ? 'en' : 'he';
    this.translate.use(nextLang);
  }
}

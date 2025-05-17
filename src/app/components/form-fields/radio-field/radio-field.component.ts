import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FieldConfig } from '../../../models/field-config.model';

@Component({
  selector: 'app-radio-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './radio-field.component.html',
  styleUrls: ['./radio-field.component.scss'],
})
export class RadioFieldComponent {
  @Input() config: any;
  @Input() form!: FormGroup;
}

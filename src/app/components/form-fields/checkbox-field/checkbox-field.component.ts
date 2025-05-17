import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FieldConfig } from '../../../models/field-config.model';

@Component({
  selector: 'app-checkbox-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.scss'],
})
export class CheckboxFieldComponent {
  @Input() config: any;
  @Input() form!: FormGroup;
}

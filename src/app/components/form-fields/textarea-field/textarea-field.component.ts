import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FieldConfig } from '../../../models/field-config.model';

@Component({
  selector: 'app-textarea-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './textarea-field.component.html',
  styleUrls: ['./textarea-field.component.scss'],
})
export class TextareaFieldComponent {
  @Input() config: any;
  @Input() form!: FormGroup;
}

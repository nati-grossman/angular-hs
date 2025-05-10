import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../../models/field-config.model';

@Component({
  selector: 'app-textarea-field',
  templateUrl: './textarea-field.component.html',
  styleUrls: ['./textarea-field.component.scss'],
})
export class TextareaFieldComponent {
  @Input() config!: FieldConfig;
  @Input() form!: FormGroup;
}

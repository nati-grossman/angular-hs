import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../../models/field-config.model';

@Component({
  selector: 'app-checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.scss'],
})
export class CheckboxFieldComponent {
  @Input() config!: FieldConfig;
  @Input() form!: FormGroup;
}

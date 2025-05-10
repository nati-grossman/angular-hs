import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../../models/field-config.model';

@Component({
  selector: 'app-radio-field',
  templateUrl: './radio-field.component.html',
  styleUrls: ['./radio-field.component.scss'],
})
export class RadioFieldComponent {
  @Input() config!: FieldConfig;
  @Input() form!: FormGroup;
}

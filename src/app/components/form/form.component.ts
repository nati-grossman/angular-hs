import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FieldConfig } from '../../models/field-config.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form!: FormGroup;

  showFields: FieldConfig[] = [
    {
      type: 'text',
      label: 'FORM.REGULAR_TEXT_FIELD_LABEL',
      name: 'textField',
      placeholder: 'FORM.REGULAR_TEXT_FIELD_PLACEHOLDER',
      required: true,
      disabled: false,
    },
    {
      type: 'text',
      label: 'FORM.DISABLED_TEXT_FIELD_LABEL',
      name: 'disabledTextField',
      placeholder: 'FORM.DISABLED_TEXT_FIELD_PLACEHOLDER',
      required: false,
      disabled: true,
    },
    {
      type: 'radio',
      label: 'FORM.RADIO_FIELD_LABEL',
      name: 'radioField',
      options: [
        { label: 'FORM.RADIO_OPTION_1', value: '1' },
        { label: 'FORM.RADIO_OPTION_2', value: '2' },
        { label: 'FORM.RADIO_OPTION_3', value: '3' },
      ],
      required: false,
      disabled: false,
    },
    {
      type: 'select',
      label: 'FORM.SELECT_FIELD_LABEL',
      name: 'selectField',
      options: [
        { label: 'FORM.SELECT_PLACEHOLDER', value: '' },
        { label: 'FORM.SELECT_OPTION_1', value: '1' },
        { label: 'FORM.SELECT_OPTION_2', value: '2' },
        { label: 'FORM.SELECT_OPTION_3', value: '3' },
      ],
      required: false,
      disabled: false,
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({});
    this.showFields.forEach((field) => {
      this.form.addControl(field.name, this.fb.control(''));
    });
    console.log('showFields:', this.showFields);
  }
}

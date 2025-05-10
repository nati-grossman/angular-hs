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
      label: 'שדה טקסט רגיל',
      name: 'textField',
      placeholder: 'הכנס טקסט כאן',
      required: true,
      disabled: false,
    },
    {
      type: 'text',
      label: 'שדה טקסט מושבת',
      name: 'disabledTextField',
      placeholder: 'שדה מושבת',
      required: false,
      disabled: true,
    },
    {
      type: 'radio',
      label: 'שדה רדיו',
      name: 'radioField',
      options: [
        { label: 'אפשרות 1', value: '1' },
        { label: 'אפשרות 2', value: '2' },
        { label: 'אפשרות 3', value: '3' },
      ],
      required: false,
      disabled: false,
    },
    {
      type: 'select',
      label: 'שדה בחירה',
      name: 'selectField',
      options: [
        { label: 'בחר אפשרות', value: '' },
        { label: 'אפשרות 1', value: '1' },
        { label: 'אפשרות 2', value: '2' },
        { label: 'אפשרות 3', value: '3' },
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

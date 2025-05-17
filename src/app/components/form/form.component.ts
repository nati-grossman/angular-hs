import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TextFieldComponent } from '../form-fields/text-field/text-field.component';
import { RadioFieldComponent } from '../form-fields/radio-field/radio-field.component';
import { SelectFieldComponent } from '../form-fields/select-field/select-field.component';
import { CheckboxFieldComponent } from '../form-fields/checkbox-field/checkbox-field.component';
import { TextareaFieldComponent } from '../form-fields/textarea-field/textarea-field.component';
import { PasswordFieldComponent } from '../form-fields/password-field/password-field.component';
import { FieldConfig } from '../../models/field-config.model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    TextFieldComponent,
    RadioFieldComponent,
    SelectFieldComponent,
    CheckboxFieldComponent,
    TextareaFieldComponent,
    PasswordFieldComponent,
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup;
  submitted = false;
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
    {
      type: 'checkbox',
      label: 'FORM.CHECKBOX_FIELD_LABEL',
      name: 'checkboxField',
      required: false,
      disabled: false,
    },
    {
      type: 'textarea',
      label: 'FORM.TEXTAREA_FIELD_LABEL',
      name: 'textareaField',
      placeholder: 'FORM.TEXTAREA_FIELD_PLACEHOLDER',
      required: false,
      disabled: false,
    },
    {
      type: 'password',
      label: 'FORM.PASSWORD_FIELD_LABEL',
      name: 'passwordField',
      placeholder: 'FORM.PASSWORD_FIELD_PLACEHOLDER',
      required: false,
      disabled: false,
    },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      textField: ['', Validators.required],
      disabledTextField: [{ value: '', disabled: true }],
      radioField: [''],
      selectField: [''],
      checkboxField: [false],
      textareaField: [''],
      passwordField: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}

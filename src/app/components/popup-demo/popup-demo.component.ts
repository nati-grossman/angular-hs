import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HelpIconComponent } from '../help-icon/help-icon.component';
import { PopupComponent } from '../popup/popup.component';
import { TableComponent, TableConfig } from '../table/table.component';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TextFieldComponent } from '../form-fields/text-field/text-field.component';
import { RadioFieldComponent } from '../form-fields/radio-field/radio-field.component';
import { SelectFieldComponent } from '../form-fields/select-field/select-field.component';
import { CheckboxFieldComponent } from '../form-fields/checkbox-field/checkbox-field.component';
import { TextareaFieldComponent } from '../form-fields/textarea-field/textarea-field.component';
import { PasswordFieldComponent } from '../form-fields/password-field/password-field.component';

@Component({
  selector: 'app-popup-demo',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    HelpIconComponent,
    PopupComponent,
    TableComponent,
    ReactiveFormsModule,
    TextFieldComponent,
    RadioFieldComponent,
    SelectFieldComponent,
    CheckboxFieldComponent,
    TextareaFieldComponent,
    PasswordFieldComponent,
  ],
  templateUrl: './popup-demo.component.html',
  styleUrls: ['./popup-demo.component.scss'],
})
export class PopupDemoComponent {
  showComplexPopup = false;
  tableData = [
    { id: 1, name: 'ישראל ישראלי', email: 'israel@example.com' },
    { id: 2, name: 'שרה כהן', email: 'sarah@example.com' },
  ];
  tableConfig: TableConfig = {
    columns: [
      { key: 'id', label: 'מזהה', type: 'number' as const, sortable: true },
      { key: 'name', label: 'שם', type: 'text' as const, sortable: true },
      { key: 'email', label: 'אימייל', type: 'text' as const, sortable: true },
    ],
    showHeader: true,
    striped: true,
    hover: true,
    bordered: true,
    sortable: true,
    small: false,
    paginationConfig: {
      enabled: false,
      itemsPerPage: 10,
      maxSize: 5,
    },
  };

  popupForm: FormGroup;
  popupFields = [
    {
      type: 'text',
      label: 'שם',
      name: 'name',
      required: true,
      disabled: false,
    },
    {
      type: 'text',
      label: 'אימייל',
      name: 'email',
      required: true,
      disabled: false,
    },
  ];

  constructor(private fb: FormBuilder) {
    this.popupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
}

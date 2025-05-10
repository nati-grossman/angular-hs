import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { TextFieldComponent } from './components/form-fields/text-field/text-field.component';
import { RadioFieldComponent } from './components/form-fields/radio-field/radio-field.component';
import { SelectFieldComponent } from './components/form-fields/select-field/select-field.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CheckboxFieldComponent } from './components/form-fields/checkbox-field/checkbox-field.component';
import { TextareaFieldComponent } from './components/form-fields/textarea-field/textarea-field.component';
import { PasswordFieldComponent } from './components/form-fields/password-field/password-field.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    TableComponent,
    TextFieldComponent,
    RadioFieldComponent,
    SelectFieldComponent,
    DataTableComponent,
    PaginationComponent,
    CheckboxFieldComponent,
    TextareaFieldComponent,
    PasswordFieldComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'he',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

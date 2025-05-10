export interface FieldOption {
  label: string;
  value: any;
}

export interface FieldConfig {
  type:
    | 'text'
    | 'radio'
    | 'select'
    | 'submit'
    | 'email'
    | 'password'
    | 'textarea'
    | 'checkbox';
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  options?: FieldOption[];
  value?: any;
  disabled?: boolean;
  validation?: {
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  };
}

// @flow

export type ColumnType = {
  [string]: string,
};

export type OptionType = {
  summary: string,
  label: string | React$Element<any> | ColumnType,
  value: string | number,
  isPremium?: boolean,
};

export type OptionGroupType = {
  label: string,
  options: Array<OptionType>,
};

type FieldType =
  | 'text'
  | 'select'
  | 'file'
  | 'textarea'
  | 'radio'
  | 'phone'
  | 'segment'
  | 'number'
  | 'checkbox'
  | 'slider'
  | 'multi'
  | 'multi_text'
  | 'description'
  | 'table'
  | 'switch';

export type FormFieldType = {
  name: string,
  title: string,
  placeholder?: string,
  note?: string,
  validation?: 'email' | 'numeric',
  required?: boolean,
  type: FieldType,
  options?: Array<OptionType | OptionGroupType>,
  columns?: ColumnType,
  multi?: boolean,
  isPremium?: boolean,
  isCustom?: boolean,
  shouldShowWhen?: { field: string, value: string },
};

export type FormGroupType = {
  groupLabel: string,
  groupNote?: string,
  formFields: Array<FormFieldType>,
};

export type FormPageDetailType = {
  formGroups?: Array<FormGroupType>,
  id: string,
  linkTitle: string,
  note?: string,
  title: string,
};

export type FormPageType = {
  ...FormPageDetailType,
  component: React$ComponentType<any>,
  explainerComponent: ?React$ComponentType<any>,
};

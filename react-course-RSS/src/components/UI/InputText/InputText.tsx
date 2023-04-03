import React from 'react';

import {
  FieldErrors,
  FieldValues,
  UseFormRegisterReturn,
} from 'react-hook-form';

import './inputText.css';

interface IInputTextProps {
  errors: FieldErrors<FieldValues>;
  type: string;
  id: string;
  placeholder?: string;
  accept?: string;
  rest: UseFormRegisterReturn;
}

export default function InputText(props: IInputTextProps) {
  const { type, placeholder, id, errors, accept, rest } = props;
  let title = '';

  switch (rest.name) {
    case 'firstName':
      title = 'Your first name';
      break;
    case 'lastName':
      title = 'Your last name';
      break;
    case 'birthDay':
      title = 'Your birth date';
      break;
    case 'file':
      title = 'Select avatar img';
      break;
    default:
      title = '';
  }

  return (
    <div className="name-box">
      <p className="name__label">{title}</p>
      <input
        data-testid={`${rest.name}Test`}
        accept={accept}
        type={type}
        className={`name_input ${
          errors[rest.name]?.message ? 'error-field' : ''
        }`}
        id={id}
        placeholder={placeholder}
        {...rest}
      />
      <div className="error-name error-box" data-testid={`${rest.name}Error`}>
        {errors[rest.name]?.message ? `${errors[rest.name]?.message}` : ''}
      </div>
    </div>
  );
}

InputText.defaultProps = {
  placeholder: '',
  accept: '',
};

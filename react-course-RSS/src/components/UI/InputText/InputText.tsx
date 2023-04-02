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
  placeholder: string;
  rest: UseFormRegisterReturn;
}

export default function InputText(props: IInputTextProps) {
  const { type, placeholder, id, errors, rest } = props;

  return (
    <div className="name-box">
      <p className="name__label">{rest.name}</p>
      <input
        data-testid="testInputText"
        // accept={accept}
        type={type}
        className={`name_input ${
          errors[rest.name]?.message ? 'error-field' : ''
        }`}
        id={id}
        placeholder={placeholder}
        {...rest}
      />
      <div className="error-name error-box" data-testid="errorInputId">
        {errors[rest.name]?.message ? `${errors[rest.name]?.message}` : ''}
      </div>
    </div>
  );
}

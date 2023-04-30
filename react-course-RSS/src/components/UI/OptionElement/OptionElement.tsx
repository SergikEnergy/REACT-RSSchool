import React from 'react';
import { FieldErrors, FieldValues, UseFormRegisterReturn } from 'react-hook-form';

import './optionElement.css';

interface OptionElementProps {
  variants: string[];
  id: string;
  errors: FieldErrors<FieldValues>;
  rest: UseFormRegisterReturn;
}

export default function OptionElement(props: OptionElementProps) {
  const { id, errors, variants, rest } = props;
  const title = rest.name === 'meal' ? 'Your favorite meal' : '';

  return (
    <div className="meal-box">
      <p className="meal__label">{title}</p>
      <select
        data-testid="mealSelect"
        className={`meal__select ${errors[rest.name]?.message ? 'error-field' : ''}`}
        id={id}
        defaultValue={variants[0]}
        {...rest}
      >
        <option className="meal__select_option" value={variants[0]}>
          {variants[0]}
        </option>
        <option className="meal__select_option" value={variants[1]}>
          {variants[1]}
        </option>
        <option className="meal__select_option" value={variants[2]}>
          {variants[2]}
        </option>
        <option className="meal__select_option" value={variants[3]}>
          {variants[3]}
        </option>
        <option className="meal__select_option" value={variants[4]}>
          {variants[4]}
        </option>
      </select>
      <div className="error-meal error-box" data-testid="errorInputId">
        {errors[rest.name]?.message ? `${errors[rest.name]?.message}` : ''}
      </div>
    </div>
  );
}

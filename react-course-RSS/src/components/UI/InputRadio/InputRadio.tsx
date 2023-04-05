import React from 'react';
import { FieldErrors, FieldValues, UseFormRegisterReturn } from 'react-hook-form';

import './inputRadio.css';

interface InputRadioProps {
  title: string;
  rest: UseFormRegisterReturn;
  errors: FieldErrors<FieldValues>;
}

export default function InputRadio(props: InputRadioProps) {
  const variants = ['Instagram', 'Twitter', 'Facebook'];
  const { title, errors, rest } = props;

  return (
    <div className="social-box">
      <div className="social__label">
        {title}
        <div className="social__radio_wrapper">
          {variants.map((elem) => {
            return (
              <div className="social__elem" key={elem}>
                <input data-testid={`${elem}Test`} type="radio" className="social__elem_radio" id={`social${elem}`} value={elem} {...rest} />
                <label className="social__elem_label" htmlFor={`social${elem}`}>
                  {elem}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="error-social error-box" data-testid="errorRadioGroup">
        {errors[rest.name]?.message ? `${errors[rest.name]?.message}` : ''}
      </div>
    </div>
  );
}

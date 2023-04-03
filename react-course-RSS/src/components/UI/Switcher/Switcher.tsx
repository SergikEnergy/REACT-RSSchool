import React from 'react';
import {
  FieldErrors,
  FieldValues,
  UseFormRegisterReturn,
} from 'react-hook-form';

import './switcher.css';

interface SwitcherProps {
  errors: FieldErrors<FieldValues>;
  rest: UseFormRegisterReturn;
}

export default function Switcher(props: SwitcherProps) {
  const { rest, errors } = props;

  return (
    <div className="switch-box">
      <div className="switch-box_row">
        <label htmlFor="switcher" className="switch">
          <input
            type="checkbox"
            id="switcher"
            data-testid="switcherTest"
            className={`switch__check ${
              errors[rest.name]?.message ? 'error-field' : ''
            }`}
            {...rest}
          />
          <span className="slider" />
        </label>
        <div className="switch__description">I agree with privacy policy</div>
      </div>
      <div className="error-switcher error-box" data-testid="switcherError">
        {errors[rest.name]?.message ? `${errors[rest.name]?.message}` : ''}
      </div>
    </div>
  );
}

import React, { Component } from 'react';

import { InputTextProps } from '../../../types';
import './inputText.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class InputText extends Component<InputTextProps, unknown> {
  render() {
    const { type, value, refTo, id, placeholder, onChange, name, error, label, accept } = this.props;
    const errorBlock = error ? (
      <div className="error-name error-box" data-testid="errorInputId">
        {label.toLowerCase()} should be not empty
      </div>
    ) : (
      ''
    );

    return (
      <div className="name-box">
        <p className="name__label">{label}</p>
        <input
          data-testid="testInputText"
          accept={accept}
          type={type}
          ref={refTo}
          className={`name_input ${error ? 'error-field' : ''}`}
          id={id}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {errorBlock}
      </div>
    );
  }
}

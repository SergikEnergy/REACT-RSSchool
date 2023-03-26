import React, { Component } from 'react';

import { InputTextProps } from '../../../types';
import './inputText.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class InputText extends Component<InputTextProps, unknown> {
  render() {
    const { value, refTo, id, placeholder, onChange, name, error } = this.props;
    const errorBlock = error ? (
      <div className="error-name error-box">
        The field name should be not empty
      </div>
    ) : (
      ''
    );

    return (
      <div className="name-box">
        <p className="name__label">Name: </p>
        <input
          ref={refTo}
          className="name_input"
          type="text"
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

import React, { Component } from 'react';

import { OptionElementProps, OptionElementState } from '../../../types';
import './optionElement.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class OptionElement extends Component<
  OptionElementProps,
  OptionElementState
> {
  render() {
    const { refTo, id, onChange, name, error, variants } = this.props;

    const errorBlock = error ? (
      <div className="error-meal error-box">Please, select some options...</div>
    ) : (
      ''
    );
    return (
      <div className="meal-box">
        <p className="meal__label">Your favorite meal: </p>
        <select
          className={`meal__select ${error ? 'error-field' : ''}`}
          placeholder={variants[0]}
          ref={refTo}
          name={name}
          id={id}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            onChange(event);
          }}
        >
          <option className="meal__select_option" value="default">
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
        {errorBlock}
      </div>
    );
  }
}

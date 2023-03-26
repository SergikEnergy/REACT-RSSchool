import React, { Component } from 'react';

import { OptionElementProps, OptionElementState } from '../../../types';
import './optionElement.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class OptionElement extends Component<
  OptionElementProps,
  OptionElementState
> {
  constructor(props: OptionElementProps) {
    super(props);
    this.state = {
      value: props.variants[0],
    };
  }

  render() {
    const { refTo, id, onChange, name, error, variants } = this.props;
    const { value } = this.state;
    const errorBlock = error ? (
      <div className="error-meal error-box">Please, select some options...</div>
    ) : (
      ''
    );
    return (
      <div className="meal-box">
        <p className="meal__label">Your favorite meal: </p>
        <select
          className="meal__select"
          ref={refTo}
          name={name}
          id={id}
          value={value}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
            onChange(event);
            this.setState({ value: event.target.value });
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

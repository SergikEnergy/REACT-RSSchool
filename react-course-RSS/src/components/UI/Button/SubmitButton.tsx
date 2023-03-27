import React, { Component } from 'react';

import './submitButton.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class SubmitButton extends Component {
  render() {
    return (
      <div className="submit-block">
        <button type="submit" className="submit__button">
          Create user
        </button>
      </div>
    );
  }
}

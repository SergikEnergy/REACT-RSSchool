import React from 'react';

import './submitButton.css';

export default function SubmitButton() {
  return (
    <div className="submit-block">
      <button data-testid="buttonTest" type="submit" className="submit__button">
        Create user
      </button>
    </div>
  );
}

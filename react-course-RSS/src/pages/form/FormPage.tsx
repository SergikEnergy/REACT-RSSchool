/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import FormComponent from '../../components/FormComponent/FormComponent';

import { FormPageState } from '../../types';
import './formPage.css';

// eslint-disable-next-line react/prefer-stateless-function
class FormPage extends Component<unknown, FormPageState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      birthday: '',
      preferredMeal: '-- choose your favorite meal --',
      img: null,
      subscribe: false,
    };
  }

  render() {
    return (
      <main className="form-page">
        <h2 className="form__title">
          Please, fill in this blank to create new user
        </h2>
        <div className="form__wrapper">
          <FormComponent />
        </div>
      </main>
    );
  }
}

export default FormPage;

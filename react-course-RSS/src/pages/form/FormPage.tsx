/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import FormComponent from '../../components/FormComponent/FormComponent';

import { FormPageState } from '../../types';

// eslint-disable-next-line react/prefer-stateless-function
class FormPage extends Component<unknown, FormPageState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      birthday: '',
      preferredMeal: '-- choose your favorite meal --',
      img: null,
      subscribe: false,
    };
  }

  render() {
    return (
      <>
        <h2>Please, fill in this blank to create new user</h2>
        <FormComponent data={this.state} />
      </>
    );
  }
}

export default FormPage;

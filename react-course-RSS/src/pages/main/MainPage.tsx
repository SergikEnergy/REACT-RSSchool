import React, { Component } from 'react';
import InputSortByName from '../../components/inputSortByName/InputSortByName';

import './mainPage.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class MainPage extends Component {
  render() {
    return (
      <main className="main-page">
        <div className="main-page__wrapper">
          <h1 className="main-page__title">Welcome to the general page</h1>
          <InputSortByName />
        </div>
      </main>
    );
  }
}

import React, { Component } from 'react';

import InputSearchByName from '../../components/inputSearchByName/InputSearchByName';

import './mainPage.css';
import { ISearchName } from '../../types';

// eslint-disable-next-line react/prefer-stateless-function
export default class MainPage extends Component<unknown, ISearchName> {
  render() {
    return (
      <main className="main-page" data-testID="main-page">
        <div className="main-page__wrapper">
          <h1 className="main-page__title">Welcome to the general page</h1>
          <InputSearchByName />
        </div>
      </main>
    );
  }
}

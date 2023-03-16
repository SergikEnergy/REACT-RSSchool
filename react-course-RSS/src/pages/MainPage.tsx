import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Header from '../components/Header';

// eslint-disable-next-line react/prefer-stateless-function
export default class MainPage extends Component {
  render() {
    return (
      <main>
        <p>Main Content</p>
        <p>Cards Content</p>
      </main>
    );
  }
}

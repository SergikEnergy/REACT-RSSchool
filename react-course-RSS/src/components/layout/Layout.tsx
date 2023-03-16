import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../header/Header';
import Footer from '../footer/Footer';

// eslint-disable-next-line react/prefer-stateless-function
export default class Layout extends Component {
  render() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }
}

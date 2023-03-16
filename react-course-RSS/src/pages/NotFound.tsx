import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
export default class NotFound extends Component {
  render() {
    return (
      <>
        <h3>Oops, page not found</h3>
        <p>Here not found something usefull, check your path, please</p>
        <Link to="/">Go home</Link>
      </>
    );
  }
}

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './notFound.css';
import img404 from '../../assets/img/404.png';

// eslint-disable-next-line react/prefer-stateless-function
export default class NotFound extends Component {
  render() {
    return (
      <main className="not-found">
        <h3 className="not-found__title">Oops, page not found</h3>
        <p className="not-found__body">
          Here not found something usefull, check your path, please
        </p>
        <div className="not-found__img">
          <img src={img404} alt="not found page" />
        </div>
        <NavLink to="/" className="not-found__link_home">
          Go home
        </NavLink>
      </main>
    );
  }
}

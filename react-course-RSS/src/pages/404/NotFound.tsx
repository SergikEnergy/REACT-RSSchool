import React from 'react';
import { NavLink } from 'react-router-dom';

import img404 from '../../assets/img/404.png';

export default function NotFound() {
  return (
    <main className="not-found">
      <h3 className="not-found__title">Oops, page not found</h3>
      <p className="not-found__body">Here not found something useful, check your path, please</p>
      <div className="not-found__img">
        <img src={img404} alt="not found page img" data-testid="imgNotFound" />
      </div>
      <NavLink to="/" className="not-found__link_home" data-testid="home_link">
        Go home
      </NavLink>
    </main>
  );
}

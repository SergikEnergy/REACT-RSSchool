import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './header.css';
import IActiveLink from '../../types';

const setActiveClass = (props: IActiveLink) =>
  props.isActive
    ? 'header_navigation__list_link active_link'
    : 'header_navigation__list_link';

// eslint-disable-next-line react/prefer-stateless-function
export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header_wrapper">
          <nav className="header_navigation">
            <ul className="header_navigation__list">
              <li className="header_navigation__list_item">
                <NavLink to="/" className={setActiveClass}>
                  Home
                </NavLink>
              </li>
              <li className="header_navigation_link">
                <NavLink to="/about" className={setActiveClass}>
                  About
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

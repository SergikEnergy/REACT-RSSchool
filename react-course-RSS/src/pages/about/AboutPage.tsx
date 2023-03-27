import React, { Component } from 'react';

import './aboutPage.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class AboutPage extends Component {
  render() {
    return (
      <main className="about_page" data-testId="about-page">
        <div className="about__wrapper">
          <h3 className="about__title">About Page</h3>
          <p className="about__intro">Here will be some information about us</p>
          <div className="about__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eum
            hic et corporis aliquid quasi iure enim. Iusto vero numquam iste
            aliquid molestias culpa nostrum cumque, neque nulla magni quasi
          </div>
        </div>
      </main>
    );
  }
}

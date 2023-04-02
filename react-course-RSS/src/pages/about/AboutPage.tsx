import React from 'react';

import './aboutPage.css';

export default function AboutPage() {
  return (
    <main className="about_page" data-testid="about-page">
      <div className="about__wrapper">
        <h3 className="about__title">About Page</h3>
        <p className="about__intro">Here will be some information about us</p>
        <div className="about__description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industries standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
      </div>
    </main>
  );
}

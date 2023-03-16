import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Header extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer_repo">
          <a
            href="https://github.com/SergikEnergy"
            className="footer_author_link"
          >
            SergikEnergy
          </a>
        </div>
        <div className="footer_course">
          <a href="https://rs.school/react/" className="footer_course_link">
            ReactCourse 2023
          </a>
        </div>
      </footer>
    );
  }
}

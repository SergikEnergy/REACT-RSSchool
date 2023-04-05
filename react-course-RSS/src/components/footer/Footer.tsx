import React from 'react';

import './footer.css';
import gitLogoImg from '../../assets/img/GHlogo.png';
import rsLogoImg from '../../assets/img/rsLogo.png';

export default function Header() {
  return (
    <footer className="footer">
      <div className="footer_wrapper">
        <div className="footer__repo">
          <a href="https://github.com/SergikEnergy" className="footer_author_link">
            <img src={gitLogoImg} alt="github icon" className="footer__repo_img" />
            <span className="footer__repo_name">SergikEnergy</span>
          </a>
        </div>
        <div className="footer__course">
          <a href="https://rs.school/react/" className="footer__course_link">
            <img src={rsLogoImg} alt="rolling scope React course" className="footer__course_link_img" />
            <span className="footer__course_link_name">ReactCourse 2023</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

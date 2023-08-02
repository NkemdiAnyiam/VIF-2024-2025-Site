import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { VifLogoMark, VifLogoWide } from '../iconComponents';

export function NavBar(): JSX.Element {
  const [sticky, setSticky] = useState(window.scrollY > 0);
  const [isMobileWidth, setIsMobileWidth] = useState(window.matchMedia(`(max-width: 768px)`).matches);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setSticky(window.scrollY > 0); }
    window.addEventListener('scroll', handleScroll);

    const handleMediaQuery = (e: MediaQueryListEvent) => {
      setIsMobileWidth(e.matches);
      setExpanded(false);
    }
    const mediaList = window.matchMedia(`(max-width: 768px)`);
    mediaList.addEventListener('change', handleMediaQuery);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      mediaList.removeEventListener('change', handleMediaQuery);
    };
  });

  const handleHamburgerClick = () => {
    setExpanded(true);
  }

  return (
    <nav className={`navbar${sticky ? ' navbar--sticky' : ''}${expanded ? ' navbar--expanded' : ''}`}>
      <Link to="/" className="navbar__logo-link">
          <VifLogoMark className={`vif-logo-mark${!sticky ? ' vif-logo--invisible' : ''}`} />
          <VifLogoWide className={`vif-logo-wide${sticky ? ' vif-logo--invisible' : ''}`} />
      </Link>

      {/* {
        !isMobileWidth &&
        <ul className="navbar__links-list">
          <li className="navbar__item">
            <Link to="#" className="navbar__link">About<span className="dropdown-marker"></span></Link>
            
            <ul className="navbar__nested-list">
              <Link to="#" className="navbar__link navbar__link--nested">About Viz</Link>
            </ul>
          </li>

          <li className="navbar__item">
            <Link to="#" className="navbar__link">Event Information<span className="dropdown-marker"></span></Link>

            <ul className="navbar__nested-list">
              <Link to="#" className="navbar__link navbar__link--nested">For Students</Link>
              <Link to="#" className="navbar__link navbar__link--nested">For Industry</Link>
              <Link to="#" className="navbar__link navbar__link--nested">Common Questions</Link>
            </ul>
          </li>

          <li className="navbar__item">
            <Link to="#" className="navbar__link">Schedule</Link>
          </li>
        </ul>
      } */}

      {
        // isMobileWidth &&
        <div onClick={handleHamburgerClick} className="navbar__hamburger">
          <button className="navbar__hamburger-button">
            <div className="navbar__hamburger-bar"></div>
            <div className="navbar__hamburger-bar"></div>
            <div className="navbar__hamburger-bar"></div>
          </button>
        </div>
      }
    </nav>
  );
}

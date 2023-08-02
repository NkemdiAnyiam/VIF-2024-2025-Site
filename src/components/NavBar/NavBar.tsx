import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { VifLogoMark, VifLogoWide, XSign } from '../iconComponents';

// TODO: implement focus trap when in modal
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
      document.querySelector('body')?.classList.remove('scroll-disabled');
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
    document.querySelector('body')?.classList.add('scroll-disabled');
  }

  const handleXClick = () => {
    setExpanded(false);
    document.querySelector('body')?.classList.remove('scroll-disabled');
  }

  return (
    <nav className={`navbar${sticky ? ' navbar--sticky' : ''}${expanded ? ' navbar--expanded' : ''}`}>
      <Link to="/" className="navbar__logo-link">
          <VifLogoMark className={`vif-logo-mark${(sticky || expanded) ? '' : ' vif-logo--invisible'}`} />
          <VifLogoWide className={`vif-logo-wide${!(sticky || expanded) ? '' : ' vif-logo--invisible'}`} />
      </Link>

      {
        (!isMobileWidth || expanded) &&
        <ul className={`navbar__links-list${expanded ? ' navbar__links-list--expanded' : ''}`}>
          <li className="navbar__item">
            <span tabIndex={0} className="navbar__link navbar__link--top-level">About<span className="dropdown-marker"></span></span>
            
            <ul className={`navbar__nested-list${expanded ? ' navbar__nested-list--expanded' : ''}`}>
              <Link to="#" className="navbar__link navbar__link--nested">About Viz</Link>
            </ul>
          </li>

          <li className="navbar__item">
            <span tabIndex={0} className="navbar__link navbar__link--top-level">Event Information<span className="dropdown-marker"></span></span>

            <ul className={`navbar__nested-list${expanded ? ' navbar__nested-list--expanded' : ''}`}>
              <Link to="#" className="navbar__link navbar__link--nested">For Students</Link>
              <Link to="#" className="navbar__link navbar__link--nested">For Industry</Link>
              <Link to="#" className="navbar__link navbar__link--nested">Common Questions</Link>
            </ul>
          </li>

          <li className="navbar__item">
            <Link to="#" className="navbar__link">Schedule</Link>
          </li>
        </ul>
      }

      {
        isMobileWidth &&
        (
          expanded ?

          <button onClick={handleXClick} className="navbar__close-button">
            <XSign className="navbar__close-button-icon" />
          </button> :

          <div onClick={handleHamburgerClick} className="navbar__hamburger">
            <button className="navbar__hamburger-button">
              <div className="navbar__hamburger-bar"></div>
              <div className="navbar__hamburger-bar"></div>
              <div className="navbar__hamburger-bar"></div>
            </button>
          </div>
        )
      }
    </nav>
  );
}

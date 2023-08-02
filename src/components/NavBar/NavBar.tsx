import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { VifLogoMark, VifLogoWide } from '../iconComponents';

export function NavBar(): JSX.Element {
  const [sticky, setSticky] = useState(window.scrollY > 0);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  return (
    <nav className={`navbar${sticky ? ' navbar--sticky' : ''}`}>
      <Link to="/" className="navbar__logo-container">
          <VifLogoMark className={`vif-logo-mark`} />
          <VifLogoWide className={`vif-logo-wide${sticky ? ' vif-logo--invisible' : ''}`} />
      </Link>

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
    </nav>
  );
}

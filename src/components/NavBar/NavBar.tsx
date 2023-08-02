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
      <Link to="/" className="logo-container">
        {
          sticky ?
          <VifLogoMark className="vif-logo-mark" /> :
          <VifLogoWide className="vif-logo-wide" />
        }
      </Link>

      <ul className="navbar__links-list">
        <li className="navbar__item">
          <Link to="#" className="navbar__link">About</Link>
        </li>
        <li className="navbar__item">
          <Link to="#" className="navbar__link">Event Information</Link>
        </li>
        <li className="navbar__item">
          <Link to="#" className="navbar__link">Schedule</Link>
        </li>
      </ul>
    </nav>
  );
}

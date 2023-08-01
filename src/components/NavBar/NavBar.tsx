import React, { useEffect, useState } from 'react';

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
      <span className="logo-container">
        <VifLogoMark className="vif-logo-mark" />
        {/* <VifLogoWide className="vif-logo-wide" /> */}
      </span>
      Nav
    </nav>
  );
}

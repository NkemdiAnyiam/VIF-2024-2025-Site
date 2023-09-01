import React from 'react';

import { FooterLink } from './FooterLink/FooterLink';
import { LogoInstagram, LogoLinkedin, LogoTwitter, LogoYoutube } from '../iconComponents';

export function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <ul className="footer__links">
        <FooterLink href="https://twitter.com/tamuviz?t=GzuSJdHsO5U7NpkGwtHXBA&s=09" ariaLabel={`Visit Twitter`}>
          <LogoTwitter className="footer__icon footer__icon--twitter" />
        </FooterLink>

        <FooterLink href="https://youtube.com/c/TexasAMDepartmentofVisualization" ariaLabel={`Visit YouTube`}>
          <LogoYoutube className="footer__icon footer__icon--youtube" />
        </FooterLink>

        <FooterLink href="https://instagram.com/tamu_vizindustryfair?utm_medium=copy_link" ariaLabel={`Visit Instagram`}>
          <LogoInstagram className="footer__icon footer__icon--instagram" />
        </FooterLink>

        <FooterLink href="https://www.linkedin.com/company/texas-a-m-visualization-industry-fair" ariaLabel={`Visit LinkedIn`}>
          <LogoLinkedin className="footer__icon footer__icon--linkedin" />
        </FooterLink>
      </ul>
    </footer>
  );
}

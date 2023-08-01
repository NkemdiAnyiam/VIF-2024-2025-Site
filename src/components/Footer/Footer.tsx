import React from 'react';
import { FooterLink } from './FooterLink/FooterLink';
import { LogoInstagram, LogoLinkedin, LogoTwitter, LogoYoutube } from '../iconComponents';

export function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <ul className="footer__links">
        <FooterLink href="https://twitter.com/tamuviz?t=GzuSJdHsO5U7NpkGwtHXBA&s=09">
          <LogoTwitter className="footer__icon" />
        </FooterLink>

        <FooterLink href="https://youtube.com/c/TexasAMDepartmentofVisualization">
          <LogoYoutube className="footer__icon" />
        </FooterLink>

        <FooterLink href="https://instagram.com/tamu_vizindustryfair?utm_medium=copy_link">
          <LogoInstagram className="footer__icon" />
        </FooterLink>

        <FooterLink href="https://www.linkedin.com/company/texas-a-m-visualization-industry-fair">
          <LogoLinkedin className="footer__icon" />
        </FooterLink>
      </ul>
    </footer>
  );
}

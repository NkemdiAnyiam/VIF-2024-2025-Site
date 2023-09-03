import React from 'react';

type HeaderProps = {
  children: JSX.Element | JSX.Element[];
  jpegSrc: string;
  webpSrc: string;
  type: 'landing' | 'normal';
}

export function Header(props: HeaderProps): JSX.Element {
  return (
    <header className={`header header--${props.type}`}>
      <div className={`header__background header__background--${props.type === 'landing' ? 'green' : 'yellow'}`}>
        <picture className="header__background-picture">
          <source srcSet={props.webpSrc} type="image/webp" />
          <source srcSet={props.jpegSrc} type="image/jpeg" />
          <img src={props.jpegSrc} alt="Seated group of Viz students" className="header__background-img" />
        </picture>
      </div>
      <div className="container">
        {props.children}
      </div>
    </header>
  );
}

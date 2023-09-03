import React from 'react';

type HeaderProps = {
  children: JSX.Element | JSX.Element[];
  imageName: string;
  type: 'landing' | 'normal';
}

export function Header(props: HeaderProps): JSX.Element {
  return (
    <header className={`header header--${props.type}`}>
      <div className={`header__background header__background--${props.type === 'landing' ? 'green' : 'yellow'}`}>
        <picture className="header__background-picture">
          <source srcSet={require(`../../images/${props.imageName}.webp`)} type="image/webp" />
          <source srcSet={require(`../../images/${props.imageName}.jpg`)} type="image/jpeg" />
          <img src={require(`../../images/${props.imageName}.jpg`)} alt="Seated group of Viz students" className="header__background-img" />
        </picture>
      </div>
      <div className="container">
        {props.children}
      </div>
    </header>
  );
}

import React from "react";

type PictureSquareProps = {
  text?: string;
  imageName: string;
  altText: string;
  color: 'red' | 'green' | 'yellow' | 'purple';
}

export function PictureSquare(props: PictureSquareProps): JSX.Element {
  return (
    <div className={`picture-square${props.color ? ` picture-square--${props.color}` : ''}`}>
      <p className="picture-square__text">{props.text}</p>
      <div className="picture-square__background">
        <img
          src={require(`../../images/programs/${props.imageName}.jpg`)}
          alt={props.altText}
          className="picture-square__image"
        />
      </div>
    </div>
  );
}

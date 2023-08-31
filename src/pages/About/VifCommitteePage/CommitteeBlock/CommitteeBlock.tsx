import React /*, { useState }*/ from 'react';

type Color = 'red' | 'green' | 'yellow' | 'purple';

type CommitteeBlockProps = {
  fullName: string;
  role: string;
  rank: 1 | 2 | 3 | 4;
  imgSrc: string;
  description: string;
  socials?: Partial<{
    linkedin: string;
    youtube: string;
    twitter: string;
    github: string;
    facebook: string;
    instagram: string;
    website: string;
  }>;
};

const rankToColor = (rank: 1 | 2 | 3 | 4): Color => {
  switch(rank) {
    case 1: return `red`;
    case 2: return `green`;
    case 3: return `yellow`;
    case 4: return `purple`;
    default: throw new Error(`Invalid rank ${rank} has no corresponding color`);
  }
};

export function CommitteeBlock(props: CommitteeBlockProps): JSX.Element {

  return (
    <div className={`committee-block${` committee-block--${rankToColor(props.rank)}`}`}>
      <div className="committee-block__header">
        <div className="committee-block__photo-container">
          <img
            src={props.imgSrc}
            alt={props.fullName}
            className="committee-block__photo"
          />
        </div>

        <div className={`committee-block__title`}>
          <h3 className={`committee-block__name`}>{props.fullName}</h3>
          <p className={`committee-block__role`}>{props.role}</p>
        </div>

        <div className={`committee-block__socials`}>
          <div className="committee-block__social-link"></div>
          <div className="committee-block__social-link"></div>
          <div className="committee-block__social-link"></div>
          <div className="committee-block__social-link"></div>
          <div className="committee-block__social-link"></div>
        </div>
      </div>

      <div className="committee-block__description">
        <div className="paragraphs">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

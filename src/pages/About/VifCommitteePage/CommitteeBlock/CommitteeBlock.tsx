import React , { useState } from 'react';

import { LogoInstagram, LogoLinkedin, LogoTwitter, LogoYoutube, LogoGithub, GlobeOutline, LogoFacebook } from '../../../../components/iconComponents';

type Color = 'red' | 'green' | 'yellow' | 'purple';

type Socials = {
  linkedin: string;
  youtube: string;
  twitter: string;
  github: string;
  facebook: string;
  instagram: string;
  website: string;
};

export type CommitteeBlockProps = {
  fullName: string;
  role: string;
  rank: 1 | 2 | 3 | 4;
  imgSrc: string;
  specialImgSrc?: string;
  specialImgSrcAlt?: string;
  description: string;
  socials: Partial<Socials>;
};

const rankToColor = (rank: CommitteeBlockProps['rank']): Color => {
  switch(rank) {
    case 1: return `red`;
    case 2: return `green`;
    case 3: return `yellow`;
    case 4: return `purple`;
    default: throw new Error(`Invalid rank ${rank} has no corresponding color`);
  }
};

const renderSocialLink = (type: keyof Socials, url: string): JSX.Element => {
  return (
    <li key={url} className="committee-block__social-item">
      <a
        className="committee-block__social-link"
        href={url}
        target="_blank"
        rel="noreferrer"
        onClick={(e) => {
          e.stopPropagation(); // prevents triggering setExpanded()
        }}
      >
        {
          (() => {
            switch(type) {
              case 'linkedin': return <LogoLinkedin />;
              case 'youtube': return <LogoYoutube />;
              case 'twitter': return <LogoTwitter />;
              case 'github': return <LogoGithub />;
              case 'facebook': return <LogoFacebook />;
              case 'instagram': return <LogoInstagram />;
              case 'website': return <GlobeOutline />;
              default: throw new Error(`Invalid social type ${type}.`);
            }
          })()
        }
      </a>
    </li>
  );
};

const renderSocialLinks = (socials: Partial<Socials>): JSX.Element[] => {
  return Object.entries(socials)
    .filter(([_, url]) => url)
    .map(([type, url]) => {
      return renderSocialLink(type as keyof Socials, url);
    });
};

export function CommitteeBlock(props: CommitteeBlockProps): JSX.Element {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`committee-block${` committee-block--${rankToColor(props.rank)}`}`}>
      <div className="committee-block__header" onClick={() => setExpanded(!expanded)}>
        <div className="committee-block__photo-container">
          <img
            src={props.imgSrc}
            alt={props.fullName}
            className="committee-block__photo"
          />
          {
            props.specialImgSrc &&
            <img
              src={props.specialImgSrc}
              alt={props.specialImgSrcAlt}
              className="committee-block__photo committee-block__photo--special"
            />
          }
        </div>

        <div className={`committee-block__title`}>
          <h3 className={`committee-block__name`}>{props.fullName}</h3>
          <p className={`committee-block__role`}>{props.role}</p>
        </div>

        {
          Object.keys(props.socials).length > 0 &&
          <ul className={`committee-block__socials`}>
            {renderSocialLinks(props.socials)}
          </ul>
        }

        
        <div className="dropdown-marker-container">
          <span className={`dropdown-marker${expanded ? ' dropdown-marker--up' : ''}`}></span>
        </div>
      </div>

      <div className={`committee-block__description${!expanded ? ' committee-block__description--hidden' : ''}`}>
        <div className="paragraphs">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

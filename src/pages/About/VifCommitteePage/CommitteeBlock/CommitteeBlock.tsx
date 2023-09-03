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
  webpSrc: string;
  jpegSrc: string;
  specialWebpSrc?: string;
  specialJpegSrc?: string;
  specialImgAlt?: string;
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

const renderSocialLink = (type: keyof Socials, url: string, memberName: string): JSX.Element => {
  return (
    <li key={url} className="committee-block__social-item">
      <a
        className="committee-block__social-link"
        href={url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Visit ${memberName}'s ${type}`}
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

const renderSocialLinks = (socials: Partial<Socials>, memberName: string): JSX.Element[] => {
  return Object.entries(socials)
    .filter(([_, url]) => url)
    .map(([type, url]) => {
      return renderSocialLink(type as keyof Socials, url, memberName);
    });
};

export function CommitteeBlock(props: CommitteeBlockProps): JSX.Element {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`committee-block${` committee-block--${rankToColor(props.rank)}`}`}>
      <div className="committee-block__header" onClick={() => setExpanded(!expanded)}>
        <div className="committee-block__photo-container">
          <picture className="committee-block__picture">
            <source srcSet={props.webpSrc} type="image/webp" />
            <source srcSet={props.jpegSrc} type="image/jpeg" />
            <img src={props.jpegSrc} alt={props.fullName} className="committee-block__photo" />
          </picture>
          {
            props.specialJpegSrc &&
            <picture className="committee-block__picture">
              <source srcSet={props.specialWebpSrc} type="image/webp" />
              <source srcSet={props.specialJpegSrc} type="image/jpeg" />
              <img src={props.specialJpegSrc} alt={props.specialImgAlt} className="committee-block__photo committee-block__photo--special" />
            </picture>
          }
        </div>

        <div className={`committee-block__title`}>
          <h3 className={`committee-block__name`}>{props.fullName}</h3>
          <p className={`committee-block__role`}>{props.role}</p>
        </div>

        {
          Object.keys(props.socials).length > 0 &&
          <ul className={`committee-block__socials`}>
            {renderSocialLinks(props.socials, props.fullName)}
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

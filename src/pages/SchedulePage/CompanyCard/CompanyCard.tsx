import React, { useState } from 'react';

export interface CompanyCardProps {
  companyName: string;
  focuses: string;
  positionTypes: string[];
  website: string;
  interviews: string;
}

// for some reason, React assumes that any link without an http/https protocol is internal,
// so we need to fix any submitted links that do not start with http or https
const cleanUrl = (url: string): string => {
  return url.match(/(https|http):\/\//) ? url : `https://${url}`;
};

const nameToLogoName = (companyName: string): string => {
  return companyName.trim().toLowerCase().replaceAll(/\s+/g, '-').match(/\w+.*\w+/)?.[0] + '-min';
};

const renderTags = (positionTypes: string[]): JSX.Element[] => {
  return positionTypes.map((positionType) => {
    return (
      <li key={positionType} className="company-card__position-item">
        <div className="company-card__tag">{positionType}</div>
      </li>
    );
  });
};

export function CompanyCard(props: CompanyCardProps): JSX.Element {
  const [expanded, setExpanded] = useState(false);
  const logoName = nameToLogoName(props.companyName);

  return (
    <div className={`company-card company-card--white`}>
      <div className="company-card__header" onClick={() => setExpanded(!expanded)}>
        <div className="company-card__photo-container">
          <picture className="company-card__picture">
            <source srcSet={require(`../../../images/companies/${logoName}.webp`)} type="image/webp" />
            <source srcSet={require(`../../../images/companies/${logoName}.jpg`)} type="image/jpeg" />
            <img src={require(`../../../images/companies/${logoName}.jpg`)} alt={props.companyName + ' logo'} className="company-card__photo" />
          </picture>
        </div>

        <div className={`company-card__title`}>
          <h3 className={`company-card__name`}>{props.companyName}</h3>
        </div>

        <p className={`company-card__focuses`}>{props.focuses}</p>

        <button className="dropdown-marker-container" aria-label={`${expanded ? 'Collapse' : 'Expand'} description for ${props.companyName}`}>
          <span className={`dropdown-marker${expanded ? ' dropdown-marker--up' : ''}`}></span>
        </button>
      </div>

      <div className={`company-card__description${!expanded ? ' company-card__description--hidden' : ''}`}>
        <div className="company-card__description-section">
          <h4 className="heading-quaternary">Website:</h4>
          <a
            href={cleanUrl(props.website)}
            className="link company-card__website"
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit ${props.companyName}'s website`}
          >
            Visit {props.companyName}
          </a>
        </div>

        <div className="company-card__description-section">
          <h4 className="heading-quaternary">Recruiting:</h4>
          <ul className="company-card__positions-list">{renderTags(props.positionTypes)}</ul>
        </div>

        <div className="company-card__description-section">
          <h4 className="heading-quaternary">Interviews:</h4>
          <div className={`company-card__tag company-card__tag--${props.interviews === 'Yes' ? 'green' : 'red'}`}>{props.interviews}</div>
        </div>
      </div>
    </div>
  );
}


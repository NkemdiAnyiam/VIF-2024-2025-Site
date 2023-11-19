import React, { useState } from 'react';

interface CompanyCardProps {
  companyName: string;
  imageName: string;
  description: string;
  focuses: string;
}

export function CompanyCard(props: CompanyCardProps): JSX.Element {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`company-card company-card--white`}>
      <div className="company-card__header" onClick={() => setExpanded(!expanded)}>
        <div className="company-card__photo-container">
          <picture className="company-card__picture">
            {/* <source srcSet={require(`../../../images/companies/${props.imageName}.png`)} type="image/png" /> */}
            {/* <source srcSet={require(`../../../images/companies/${props.imageName}.webp`)} type="image/webp" /> */}
            <source srcSet={require(`../../../images/companies/${props.imageName}.jpg`)} type="image/jpeg" />
            <img src={require(`../../../images/companies/${props.imageName}.jpg`)} alt={props.companyName} className="company-card__photo" />
          </picture>
        </div>

        <div className={`company-card__title`}>
          <h3 className={`company-card__name`}>{props.companyName}</h3>
        </div>

        <p className={`company-card__focuses`}>{props.focuses}</p>

        <div className="dropdown-marker-container">
          <span className={`dropdown-marker${expanded ? ' dropdown-marker--up' : ''}`}></span>
        </div>
      </div>

      <div className={`company-card__description${!expanded ? ' company-card__description--hidden' : ''}`}>
        <div className="paragraphs">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}


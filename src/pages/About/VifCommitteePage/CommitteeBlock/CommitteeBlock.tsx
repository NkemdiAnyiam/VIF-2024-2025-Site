import React, { useState } from 'react';

type Color = 'red' | 'green' | 'yellow' | 'purple';

type CommitteeBlockProps = {
  fullName: string;
  role: string;
  rank: 1 | 2 | 3 | 4;
  imgSrc: string;
  description: string;
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
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`committee-block${` committee-block--${rankToColor(props.rank)}`}`}>
      <div className="committee-block__header" onClick={() => setExpanded(!expanded)}>
        <h3 className="heading-tertiary committee-block__name">{props.fullName}</h3>

        <div className="dropdown-marker-container">
          <span className={`dropdown-marker${expanded ? ' dropdown-marker--up' : ''}`}></span>
        </div>
      </div>

      <div className="committee-block__description" hidden={!expanded ? true : false}>
        <div className="paragraphs">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

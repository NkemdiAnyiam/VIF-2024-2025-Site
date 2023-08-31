import React from 'react';

import { SearchEngineOpt } from '../../../components/SearchEngineOpt/SearchEngineOpt';

import { CommitteeBlock } from './CommitteeBlock/CommitteeBlock';

type CommitteeMember = {
  fullName: string;
  rank: 1 | 2 | 3 | 4;
  role: string;
  imgSrc: string;
  description: string;
};

const committeeMembers: CommitteeMember[] = [
  {
    fullName: `Kaylyn Luna`,
    role: `Committee Co-Director`,
    rank: 1,
    imgSrc: `b`,
    description: `Kaylyn is a graduate student pursuing her Masters of Science in Visualization with a focus on digital environments and layout for games. She is currently working as lead concept artist for the LIVE LAB where she creates illustrations, animations, video graphics and other digital content for the University. Outside of class, Kaylyn enjoys digital painting, cooking and reading comic books.`
  }
];

const renderVifCommBlocks = (items: CommitteeMember[]) => {
  return items.map((data, index) => {
    return (
      <li className="committee-item" key={`${data.fullName} ${data.role}`}>
        <CommitteeBlock {...data} />
      </li>
    );
  });
};

export function VifCommitteePage(): JSX.Element {
  return (
    <main className="vif-committee-page">
      <SearchEngineOpt
        title="VIF Committee - Viz Industry Fair 2024"
        // description="VIF is an opportunity for students and alumni to connect with prospective employers in today's leading industries as well as receive professional feedback."
      />

      <header className="banner">
        <div className="banner__background"></div>
        <div className="container">
          <h1 className="heading-primary">
            VIF Committee
          </h1>
        </div>
      </header>

      <section className="section section--vif-committee-members" id="vif-committee-members">
        <div className="container">
          <h2 className="heading-secondary">Members</h2>
          <ul className="committee-list">
            {renderVifCommBlocks(committeeMembers)}
          </ul>
        </div>
      </section>
    </main>
  );
}

import React from 'react';

import { SearchEngineOpt } from '../../../components/SearchEngineOpt/SearchEngineOpt';

import { CommitteeBlock } from './VifCommBlock/CommitteeBlock';

type CommitteeMember = {
  fullName: string;
  role: string;
  imgSrc: string;
  description: string;
};

const committeeMembers: CommitteeMember[] = [];

const renderVifCommBlocks = (items: CommitteeMember[], color: 'red' | 'green' | 'yellow' | 'purple') => {
  return items.map((data, index) => {
    return (
      <li className="committee-item" key={`${data.fullName} ${data.role}`}>
        <CommitteeBlock {...data} color={color} />
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
            {renderVifCommBlocks(committeeMembers, 'yellow')}
          </ul>
        </div>
      </section>
    </main>
  );
}

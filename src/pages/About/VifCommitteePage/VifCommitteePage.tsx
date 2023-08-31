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

const getPhotoSrc = (fullName: string) => require(`../../../images/committee/${fullName}-min.jpg`);

const committeeMembers: CommitteeMember[] = [
  {
    fullName: `Kaylyn Luna`,
    role: `Committee Co-Director`,
    rank: 1,
    imgSrc: getPhotoSrc(`Kaylyn-Luna`),
    description: `Kaylyn is a graduate student pursuing her Masters of Science in Visualization with a focus on digital environments and layout for games. She is currently working as lead concept artist for the LIVE LAB where she creates illustrations, animations, video graphics and other digital content for the University. Outside of class, Kaylyn enjoys digital painting, cooking and reading comic books.`,
  },

  {
    fullName: `Jenny Tran`,
    role: `Committee Co-Director`,
    rank: 1,
    imgSrc: getPhotoSrc(`Jenny-Tran`),
    description: `Jenny Tran is a Junior currently working towards her B.S. in Visualization as well as a minor in Film Studies. Her focus is on project management/3D modeling and she is passionate about pursuing a future career in the animated film industry. She is currently serving as President of TAMU Women in Animation. She also works as a 3D Artist for the SOFT Interaction Lab. Outside of class, Jenny enjoys playing video games and taking care of her pet snail.`,
  },

  {
    fullName: `Nkemdi Anyiam`,
    role: `Web Developer`,
    rank: 2,
    imgSrc: getPhotoSrc(`Nkemdi-Anyiam`),
    description: `Nkemdi Anyiam is a graduate student pursuing a Master of Science in Computer Science at Texas A&M University. He is currently working as a graduate research assistant, focusing primarily on web visualizations and computer science education.`,
  },

  {
    fullName: `Nimi Parmar`,
    role: `TV/Marketing Lead`,
    rank: 2,
    imgSrc: getPhotoSrc(`Nimi-Parmar`),
    description: `Nimi is a student of PVFA pursuing Master of Science in Visualization. She would like to be a part of the animation industry as a 3D modeler and look dev artist. She comes from a unique undergrad background with a B.S. in biological sciences but now enjoys UV unwrapping in her free time. For the past year, she has served as a graduate assistant for classes like art history and game design.`,
  },
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

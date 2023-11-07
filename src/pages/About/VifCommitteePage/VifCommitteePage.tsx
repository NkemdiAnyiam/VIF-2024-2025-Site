import React from 'react';

import { SearchEngineOpt } from '../../../components/SearchEngineOpt/SearchEngineOpt';

import { CommitteeBlock, CommitteeBlockProps } from './CommitteeBlock/CommitteeBlock';
import { Header } from '../../../components/Header/Header';

const committeeMembers: CommitteeBlockProps[] = [
  {
    fullName: `Kaylyn Luna`,
    role: `Committee Co-Director`,
    rank: 1,
    imageName: `Kaylyn-Luna-min`,
    socials: {
      linkedin: `https://www.linkedin.com/in/kaylyn-luna-5378521a7`,
      website: `https://artbykaylynluna.godaddysites.com/`,
    },
    description: `Kaylyn is a graduate student pursuing her Masters of Science in Visualization with a focus on digital environments and layout for games. She is currently working as lead concept artist for the LIVE LAB where she creates illustrations, animations, video graphics and other digital content for the University. Outside of class, Kaylyn enjoys digital painting, cooking and reading comic books.`,
  },

  {
    fullName: `Jenny Tran`,
    role: `Committee Co-Director`,
    rank: 1,
    imageName: `Jenny-Tran-min`,
    socials: {
      linkedin: `https://www.linkedin.com/in/jennyhantran/`,
      website: `https://www.jennyhtran.com/`
    },
    description: `Jenny Tran is a Junior currently working towards her B.S. in Visualization as well as a minor in Film Studies. Her focus is on project management/3D modeling and she is passionate about pursuing a future career in the animated film industry. She is currently serving as President of TAMU Women in Animation. She also works as a 3D Artist for the SOFT Interaction Lab. Outside of class, Jenny enjoys playing video games and taking care of her pet snail.`,
  },

  {
    fullName: `Nkemdi Anyiam`,
    role: `Web Designer / Developer`,
    rank: 2,
    imageName: `Nkemdi-Anyiam-min`,
    specialImageName: `Nkemdi-Anyiam-Vector-min`,
    specialImgAlt: `Nkemdi Anyiam vectorized`,
    socials: {
      linkedin: `https://www.linkedin.com/in/nkemdi-anyiam/`,
      github: `https://github.com/NkemdiAnyiam`,
    },
    description: `Nkemdi Anyiam is a graduate student pursuing a Master of Science in Computer Science at Texas A&M University. He is currently working as a graduate research assistant, focusing primarily on web visualizations and computer science education.`,
  },

  {
    fullName: `Nimi Parmar`,
    role: `TV/Marketing Lead`,
    rank: 2,
    imageName: `Nimi-Parmar-min`,
    socials: {
      linkedin: `https://www.linkedin.com/in/nimi-parmar`,
      website: `https://nimiparmar06.wixsite.com/modeler`,
    },
    description: `Nimi is a student of PVFA pursuing Master of Science in Visualization. She would like to be a part of the animation industry as a 3D modeler and look dev artist. She comes from a unique undergrad background with a B.S. in biological sciences but now enjoys UV unwrapping in her free time. For the past year, she has served as a graduate assistant for classes like art history and game design.`,
  },

  {
    fullName: `Mayet Andreassen`,
    role: `Faculty Lead Liaison`,
    rank: 3,
    imageName: `Mayet-Andreassen-min`,
    socials: {},
    description: `Mayet Andreassen is currently working as a full-time Instructional Assistant Professor and Associate Program Director in the Visualization Department at Texas A&M University. She is also a member of the TXMPA (Texas Motion Picture Assoc.) Board as the Education Representative. She has over 10 years of teaching experience with a focus in games and animation. She previously worked as a game and front-end artist, as well as a freelance illustrator and graphics artist, prior to becoming an educator.`,
  },

  {
    fullName: `Andersen Wood`,
    role: `Event Management Lead`,
    rank: 2,
    imageName: `Andersen-Wood-min`,
    socials: {
      linkedin: `https://www.linkedin.com/in/andersenwood/`,
      website: `https://www.andersenwood.com/`,
    },
    description: `Andersen is a Junior Visualization student pursuing his B.S. degree. His focus is in Project Management and Character Rigging. In addition, he is the Director of Chillennium, Director of GigaJam, Interstitials Director of Viz-A-GoGo, Vice president of A&M's ACM SIGGRAPH Chapter, and Lead Student Technician for the Visualization Program.`,
  },

  {
    fullName: `Emilie Sangerhausen`,
    role: `Outreach Lead`,
    rank: 2,
    imageName: `Emilie-Sangerhausen-min`,
    socials: {
      linkedin: `https://www.linkedin.com/in/emilie-sangerhausen-35695a1a2/ `,
      website: `https://esangerhausen.wixsite.com/portfolio`,
    },
    description: `Emilie is a senior Visualization student currently working towards her B.S. degree. After college, her dream is to be a visual development/character artist in the animation and games industry. Outside of VIF, she serves as the Student Senator for SPVFA, the Visualization Student Technician Graphic Design Lead, Outreach Lead for Viz-A-GoGo, and is a musician in the TAMU Wind Symphony. When she is not creating art or performing, she enjoys running and taking care of plants.`,
  },

  {
    fullName: `Jocylin "Joy" Lopez`,
    role: `Video Editor`,
    rank: 2,
    imageName: `Jocylin-Lopez-min`,
    socials: {
      linkedin: `www.linkedin.com/in/jocylinylopez`,
      website: `http://jocylinlopez.com/`,
    },
    description: `Joy is a graduate student pursuing a Master's in Visualization, specializing in character design, modeling, and game design. She works in marketing at the LIVE LAB, manages social media for the university, and holds roles as Social Media Officer for 2D Visual Developers and Lead Concept Artist mentor. Outside of her academic and professional life, Joy enjoys video games, anime, and oil painting.`,
  },

  {
    fullName: `Cesar Rivera`,
    role: `Career Services Coordinator`,
    rank: 3,
    imageName: `Cesar-Rivera-min`,
    socials: {},
    description: `Cesar joined the Texas A&M Career Center in 2023 and serves as the Career Coordinator for the School of Performance, Visualization, and Fine Arts. Cesar earned a B.A. in Communication Studies with a minor in Leadership Studies in 2019 as well as a M.S. in Counseling and Student Development in 2023, both from Kansas State University. He previously served in the United States Army and has work experience in the healthcare, sales, and hospital industries.`,
  }
];

const renderVifCommBlocks = (items: CommitteeBlockProps[]) => {
  return [...items]
    .sort(({rank: rankA, fullName: fullNameA}, {rank: rankB, fullName: fullNameB}) => {
      if (rankA !== rankB) {
        return rankA - rankB;
      }
      const lastNameA = fullNameA.split(' ').at(-1)!;
      const lastNameB = fullNameB.split(' ').at(-1)!;
      return lastNameA.localeCompare(lastNameB);
    })
    .map((data, index) => {
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
        title="VIF Committee | Viz Industry Fair 2024"
        description="Introducing the VIF committee, our dedicated students and faculty who help make the Visualization Industry Fair possible!"
      />

      <Header type="normal" imageName={'seated-group-photo-2-min'}>
        <h1 className="heading-primary">
          VIF Committee
        </h1>
      </Header>

      <section className="section section--vif-committee-members" id="vif-committee-members">
        <div className="container">
          <h2 className="heading-secondary">Team Leads</h2>
          <ul className="committee-list">
            {renderVifCommBlocks(committeeMembers)}
          </ul>
        </div>
      </section>
    </main>
  );
}

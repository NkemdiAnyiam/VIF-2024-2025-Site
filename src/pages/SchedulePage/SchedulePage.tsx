import React from 'react';

import { SearchEngineOpt } from '../../components/SearchEngineOpt/SearchEngineOpt';

import { Header } from '../../components/Header/Header';
import { Timetable } from '../../components/Timetable/Timetable';
import { CompanyCard, CompanyCardProps } from './CompanyCard/CompanyCard';

type Company = CompanyCardProps & {virtualTimes: any, inPersonTimes: string[]};

const companyComparator = (companyA: Company, companyB: Company) => companyA.companyName.toLowerCase().localeCompare(companyB.companyName.toLowerCase());

const companyCardData: Company[] = [
  {
    companyName: `Power Engineers`,
    focuses: `VR/AR Engineering visualization`,
    website: `powereng.com`,
    positionTypes: ['Intern', 'Full-time'],
    interviews: `Yes`,
    virtualTimes: 'O'.repeat(12).split(''),
    inPersonTimes: 'X'.repeat(12).split(''),
  },

  {
    companyName: `Framestore`,
    focuses: `Visual Effects / Animation / Immersive`,
    website: `https://www.framestore.com/about-us?language=en`,
    positionTypes: ['Intern', 'Full-time', 'Part-time'],
    interviews: `No`,
    virtualTimes: 'O'.repeat(12).split(''),
    inPersonTimes: 'X'.repeat(12).split(''),
  },

  {
    companyName: `Luna Creative`,
    focuses: `Graphic Design`,
    website: `www.luna-creative.com`,
    positionTypes: ['Intern'],
    interviews: `No`,
    virtualTimes: 'O'.repeat(12).split(''),
    inPersonTimes: 'X'.repeat(12).split(''),
  },

  {
    companyName: `A Bunch of Short Guys`,
    focuses: `Animation, Game Development, Graphic Design`,
    website: `https://www.abunchofshortguys.org/`,
    positionTypes: ['Volunteer'],
    interviews: `No`,
    virtualTimes: 'O'.repeat(12).split(''),
    inPersonTimes: 'X'.repeat(12).split(''),
  },

  {
    companyName: `Texas Film Commission`,
    focuses: `Animation, Game Development`,
    website: `www.gov.texas.gov/film`,
    positionTypes: ['Intern'],
    interviews: `No`,
    virtualTimes: 'O'.repeat(12).split(''),
    inPersonTimes: 'X'.repeat(12).split(''),
  },

  {
    companyName: `Brazen Animation`,
    focuses: `Animation, Graphic Design`,
    website: `https://www.brazenanimation.com/`,
    positionTypes: ['Full-time', 'Freelance', 'Contract worker'],
    interviews: `No`,
    virtualTimes: 'O'.repeat(12).split(''),
    inPersonTimes: [...'X'.repeat(4).split(''), ...'O'.repeat(8).split('')],
  }
];
companyCardData.sort(companyComparator);

const renderCards = (companies: Company[]): JSX.Element[] => {
  return companies
    .map((company) => {
      return (
        <li key={company.companyName} className="company-item">
          <CompanyCard {...company} />
        </li>
      );
    });
};

const generateRowData = (companies: Company[], timeType: keyof Pick<Company, 'virtualTimes' | 'inPersonTimes'>) => {
  return companies
    .filter(company => company[timeType].includes('X'))
    .map((company) => {
      return [company.companyName, ...company[timeType]];
    });
};

export function SchedulePage(): JSX.Element {
  return (
    <main className="schedule-page">

      <SearchEngineOpt
        title="Schedule | Viz Industry Fair 2024"
        description="Find out what companies are attending the fair, when they will be avaiable, and whom they are hiring."
      />

      <Header type="normal" imageName={'seated-group-photo-2-min'}>
        <h1 className="heading-primary">
          Schedule
        </h1>
      </Header>

      <section className="section section--schedule-tba" id="schedule-tba">
        <div className="container">
          <h2 className="heading-secondary">Stay Tuned</h2>

          <div className="paragraphs">
            <p>
              On this page, you will be able to see which companies are attending the fair, <span className="italicized">when</span> they will be attending,
              and what kinds of students each company is looking to hire. Any company that registers for the
              Virtual or In-Person Fair will show up here, so stay tuned.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--timetable" id="timetable">
        <div className="container">
          <h2 className="heading-secondary">Company Times (CST)</h2>

          <div className="timetables">
            <div className="timetable-container timetable-container--virtual">
              <Timetable
                heading="Virtual"
                rowData={generateRowData(companyCardData, 'virtualTimes')}
              />
            </div>

            <div className="timetable-container timetable-container--in-person">
              <Timetable
                heading="In-Person"
                rowData={generateRowData(companyCardData, 'inPersonTimes')}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--companies" id="companies">
        <div className="container">
          <h2 className="heading-secondary">Current Companies</h2>

          <ul className="companies-list">
            {renderCards(companyCardData)}
          </ul>
        </div>
      </section>
    </main>
  );
}

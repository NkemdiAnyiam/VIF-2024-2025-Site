import React from 'react';

import { SearchEngineOpt } from '../../components/SearchEngineOpt/SearchEngineOpt';

import { Header } from '../../components/Header/Header';
import { Timetable } from '../../components/Timetable/Timetable';
import { CompanyCard } from './CompanyCard/CompanyCard';

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
                rowData={[
                ]}
              />
            </div>

            <div className="timetable-container timetable-container--in-person">
              <Timetable
                heading="In-Person"
                rowData={[
                  ['POWER Engineers', ...'X'.repeat(12).split('')],
                  ['Framestore', ...'X'.repeat(12).split('')],
                  ['Luna Creative', ...'X'.repeat(12).split('')],
                  ['A Bunch of Short Guys', ...'X'.repeat(12).split('')],
                  ['Texas Film Commission', ...'X'.repeat(12).split('')],
                  ['Brazen Animation', ...'X'.repeat(4).split(''), ...'O'.repeat(12 - 4).split('')],
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--companies" id="companies">
        <div className="container">
          <h2 className="heading-secondary">Current Companies</h2>

          <ul className="companies-list">
            <li className="company-item">
              <CompanyCard
                companyName={`Power Engineers`}
                focuses={`VR/AR Engineering visualization`}
                website={`powereng.com`}
                positionTypes={['Intern', 'Full-time']}
                interviews={`Yes`}
              />
            </li>

            <li className="company-item">
              <CompanyCard
                companyName={`Framestore`}
                focuses={`Visual Effects / Animation / Immersive`}
                website={`https://www.framestore.com/about-us?language=en`}
                positionTypes={['Intern', 'Full-time', 'Part-time']}
                interviews={`No`}
              />
            </li>

            <li className="company-item">
              <CompanyCard
                companyName={`Luna Creative`}
                focuses={`Graphic Design`}
                website={`www.luna-creative.com`}
                positionTypes={['Intern']}
                interviews={`No`}
              />
            </li>

            <li className="company-item">
              <CompanyCard
                companyName={`A Bunch of Short Guys`}
                focuses={`Animation, Game Development, Graphic Design`}
                website={`https://www.abunchofshortguys.org/`}
                positionTypes={['Volunteer']}
                interviews={`No`}
              />
            </li>

            <li className="company-item">
              <CompanyCard
                companyName={`Texas Film Commission`}
                focuses={`Animation, Game Development`}
                website={`www.gov.texas.gov/film`}
                positionTypes={['Intern']}
                interviews={`No`}
              />
            </li>

            <li className="company-item">
              <CompanyCard
                companyName={`Brazen Animation`}
                focuses={`Animation, Graphic Design`}
                website={`https://www.brazenanimation.com/`}
                positionTypes={['Full-time', 'Freelance', 'Contract worker']}
                interviews={`No`}
              />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

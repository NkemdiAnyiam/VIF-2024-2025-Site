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
              and what kinds of students each company is looking to hire. The page is currently under construction, but stay tuned—any company that registers for the
              Virtual or In-Person Fair will show up here.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="section section--timetable" id="timetable">
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
                  ['Framestore', ...'X'.repeat(12).split('')],
                  ['Luna Creative', ...'X'.repeat(12).split('')],
                  ['A Bunch of Short Guys', ...'X'.repeat(12).split('')],
                  ['Texas Film Commission', ...'X'.repeat(12).split('')],
                  ['Brazen Animation', ...'X'.repeat(4).split(''), ...'O'.repeat(12 - 4).split('')],
                  ['POWER Engineers', ...'X'.repeat(12).split('')],
                ]}
              />
            </div>
          </div>
        </div>
      </section> */}

      <section className="section section--companies" id="companies">
        <div className="container">
          <h2 className="heading-secondary">Attending Companies</h2>

          <ul className="companies-list">
            <li className="company-item">
              <CompanyCard
                description="aaa ukhbsdf khbsadfg hadfgf hndfgk hubaddg ukhbadg uhobsbddg ukhnsdg ubnbnddrgr uhbsdfg uhbsdrgr uhbsdtgt byu"
                companyName='Framestore'
                imageName='framestore'
                focuses='Visual Effects / Animation / Immersive'
              />
            </li>
            <li className="company-item">
              <CompanyCard
                description="bbb kauhrb kuhakuhb akuhbr ukbae kjhsdrg kujhbubk kushrbfg jkuhbar khubar kuhbsg khub"
                // companyName='Texas Film Commission'
                companyName='Texas Moving Picture Alliance (TXMPA)'
                imageName='texas-film-commission'
                focuses='Animation, Game Development'
              />
            </li>
            <li className="company-item">
              <CompanyCard
                description="bbb kauhrb kuhakuhb akuhbr ukbae kjhsdrg kujhbubk kushrbfg jkuhbar khubar kuhbsg khub"
                // companyName='A Bunch of Short Guys'
                companyName='Houston Methodist Institute for Technology, Innovation and Education'
                imageName='a-bunch-of-short-guys'
                focuses='Animation, Game Development, Graphic Design'
              />
            </li>
            <li className="company-item">
              <CompanyCard
                description="bbb kauhrb kuhakuhb akuhbr ukbae kjhsdrg kujhbubk kushrbfg jkuhbar khubar kuhbsg khub"
                companyName='Luna Creative'
                imageName='luna-creative'
                focuses='Graphic Design'
              />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

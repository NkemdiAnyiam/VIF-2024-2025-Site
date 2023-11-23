import React from 'react';

import { SearchEngineOpt } from '../../components/SearchEngineOpt/SearchEngineOpt';

import { Header } from '../../components/Header/Header';
import { Timetable } from '../../components/Timetable/Timetable';
import { CompanyCard, CompanyCardProps } from './CompanyCard/CompanyCard';

import { data } from '../../data/companies';

const timeRanges = [
  '10:00',
  '10:30',
  '11:00',
  '11:30',
  '12:00',
  '12:30',
  '1:00',
  '1:30',
  '2:00',
  '2:30',
  '3:00',
  '3:30',
  '4:00',
].map((_, index, array) => `${array[index]}-${array[index+1]}`).slice(0, -1);

type Company = CompanyCardProps & {virtualTimes: string, inPersonTimes: string};

const companyComparator = (companyA: Company, companyB: Company) => companyA.companyName.toLowerCase().localeCompare(companyB.companyName.toLowerCase());
const companyCardData: Company[] = ([...data] as Company[]).sort(companyComparator);

const renderCards = (companies: Company[]): JSX.Element[] => {
  return companies.map((company) => {
    return (
      <li key={company.companyName} className="company-item">
        <CompanyCard {...company} />
      </li>
    );
  });
};

const generateRowData = (companies: Company[], timeType: keyof Pick<Company, 'virtualTimes' | 'inPersonTimes'>) => {
  return companies
    .filter(company => company[timeType] !== '')
    .map((company) => {
      const companyTimesStr: string = company[timeType];
      return [
        company.companyName,
        ...(companyTimesStr === 'All Day'
          ? 'X'.repeat(timeRanges.length).split('')
          : timeRanges.map(timeRange => companyTimesStr.includes(timeRange) ? 'X' : 'O')
        )
      ];
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
              On this page, you can find <a className="link" href="/schedule#companies">information about any registered companies</a> as
              well as <a className="link" href="/schedule#timetable">when they will be attending the fairs</a>.
              Any company that registers for the Virtual or In-Person Fair will show up here, so stay tuned.
              The Virtual Fair will take place Thursday, February 22<sup>nd</sup>, 2024 from 10am–4pm CST on Discord.
              The In-Person Fair will be held Friday, February 23<sup>rd</sup>, 2024, from 10am–4pm CST in MSC 2406.
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

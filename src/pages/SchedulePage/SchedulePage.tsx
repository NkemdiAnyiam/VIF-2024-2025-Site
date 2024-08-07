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

// const generateBasicRow = (time: string, period: 'am' | 'pm', event: string) => {
//   return (
//     <tr key={time}>
//       <td>{time} {period}</td>
//       <td>{event}</td>
//     </tr>
//   );
// };

export function SchedulePage(): JSX.Element {
  return (
    <main className="schedule-page">

      <SearchEngineOpt
        title="Schedule | Viz Industry Fair 2024–25"
        description="Find out what companies are attending the fair, when they will be avaiable, and whom they are hiring."
      />

      <Header type="normal" imageName={'seated-group-photo-2-min'}>
        <h1 className="heading-primary">
          Schedule
        </h1>
      </Header>

      <section className="section section--overview" id="overview">
        <div className="container">
          <h2 className="heading-secondary">Overview</h2>

          <div className="paragraphs">
            <p>
              On this page, you can find <a className="link" href="/schedule#companies">information about any registered companies</a> as
              well as <a className="link" href="/schedule#timetable">when they will be attending the fairs</a>.
              Any company that registers for the Virtual or In-Person Fair will show up here, so stay tuned.
              The Virtual Fair will take place Thursday, February 20<sup>th</sup>, 2025 from 10am–4pm CST on Discord.
              The In-Person Fair will be held Friday, February 21<sup>st</sup>, 2025 from 10am–4pm CST on the TAMU campus (Location To Be Determined).
            </p>

            {/* <p>
              On Friday, there are presentations and other events in addition to the normal fair operations.
              The schedule of events for the day is shown below.
            </p> */}
          </div>

          {/* <div className="event-tables">
            <div className="event-table">
              <table>
                <caption>Friday Event Schedule</caption>
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Event</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    generateBasicRow(`9:30`, 'am', `Volunteers Arrive for Setup`),
                    generateBasicRow(`10:00`, 'am', `Fair Day Begins`),
                    generateBasicRow(`11:00`, 'am', `EA Presentation/Q&A`),
                    generateBasicRow(`12:00`, 'pm', ``),
                    generateBasicRow(`1:00`, 'pm', `Unreal Blueprints for Vizzers Presentation`),
                    generateBasicRow(`2:00`, 'pm', `Visualization for Architecture Presentation`),
                    generateBasicRow(`3:00`, 'pm', ``),
                    generateBasicRow(`4:00`, 'pm', `Fair Day Ends - Officer Hangout`),
                    generateBasicRow(`4:30`, 'pm', `Final Clean Up`),
                    generateBasicRow(`5:00`, 'pm', `Everyone Out`),
                  ]}
                </tbody>
              </table>
            </div>
          </div> */}
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

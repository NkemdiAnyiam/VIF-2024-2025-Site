import React from 'react';

import { SearchEngineOpt } from '../../../components/SearchEngineOpt/SearchEngineOpt';

import { Header } from '../../../components/Header/Header';
import { Event } from '../../../components/Event/Event';
import { EventBox } from '../../../components/EventBox/EventBox';

// type PastCompany = {
//   companyName: string;
// }

const pastCompanies: string[] = Array.from(new Set([
  "Aggieland Outfitters",
  "Texas Film Commission",
  "Texas Moving Picture Alliance (TXMPA)",
  "Electronic Arts",
  "NOKIA",
  "N3D Studios Incorporated",
  "Powerhouse Animation",
  "SunSpear Games",
  "Pumps & Pipes",
  "Houston Methodist Institute for Technology, Innovation and Education",
  "Gearbox Software",
  "Aquifer",
  "Digital Seat Media",
  "Enduring Games",
  "C.C. Creations",
  "Booz Allen Hamilton, Inc.",
  "Cloud Imperium Games",
  "Viasat",
  "DreamWorks Animation",
  "Deloitte",
  "TRG",
  "900lbs",
  "AEM Creations",
  "App Lovin",
  "Blur Studios Inc.",
  "BonusXP",
  "Click Here Labs - TRG",
  "Cockram Scenario",
  "Credera",
  "Game Worlds",
  "IMG Studio",
  "Jacobs",
  "K2Share",
  "Mighty Coconut",
  "Proteus Games",
  "Sandshark Games",
  "Six Foot",
  "The Third Floor, Inc.",
  "VIBE",
  "Vytal Studios",
]));
pastCompanies.sort((a, b) => a.toLowerCase() <= b.toLowerCase() ? -1 : 1);

const renderPastCompanies = (companies: string[]) => {
  return companies.map((companyName) => {
    return (
      <li key={companyName} className="past-company-item">
        <div className="past-company-box">
          <p>{companyName}</p>
        </div>
      </li>
    )
  });
};

export function ForStudentsPage(): JSX.Element {
  return (
    <main className="for-students-page">
      <SearchEngineOpt
        title="For Students | Viz Industry Fair 2024"
        description="Students will find important information about the Viz Industry Fair, including registration forms for the fair and other events."
      />

      <Header type="normal" imageName={'seated-group-photo-2-min'}>
        <h1 className="heading-primary">
          For Students
        </h1>
      </Header>

      <section className="section section--welcome-students" id="students-welcome">
        <div className="container">
          <h2 className="heading-secondary">
            Welcome, Vizzers!
          </h2>

          <div className="paragraphs">
            <p>
              The Visualization Industry Fair (VIF) is an opportunity for students interested in Animation, Gaming, Graphics,
              and Interactive technologies to connect with prospective employers working in high level positions
              in some of today's leading industries and receive professional feedback on their work.
              <strong> The Virtual Fair will be held Thursday, February 22<sup>nd</sup>, 2024, from 10am–4pm CST via Discord.</strong>
              <strong> The In-Person Fair will be held Friday, February 23<sup>rd</sup>, 2024, from 10am–4pm CST in MSC 2406.</strong>
            </p>

            <p className="no-gap">
              <strong>Before you register for the Fair, </strong>please <a href="https://tally.so/r/3xMRPE" className="link" target="_blank" rel="noreferrer">register for our new Professionalism Workshop</a>!
              This workshop serves as an informational for the VIF events and teaches you best practices for communicating with industry professionals.
              To uphold the professional standards of Texas A&M University, current students are <strong>required</strong> to
              attend one of the three professionalism workshops before attending the industry fair or any other VIF event.
              Current students who attempt to register for an event without first attending a workshop day will be removed from the registration list.
              Former students are not required to attend a workshop, but it is encouraged!
              The workshops will be held on the following dates:
            </p>

            <ul className="no-gap">
              <li>Monday, September 25<sup>th</sup></li>
              <li>Wednesday, September 27<sup>th</sup></li>
              <li>Friday, September 29<sup>th</sup></li>
            </ul>
            
            <p>
              If you cannot attend one of the workshop dates, please contact a committee member
              or email us at <a href="mailto:pvfavizindustryfair@tamu.edu" className="link">pvfavizindustryfair@tamu.edu</a> so
              we can send you the information and add you to our exceptions list.
            </p>

            <p className="no-gap">
              To register for the fair itself, you will need a downloadable version of your resume and a link to your portfolio website.
            </p>
            <p className="no-gap">
              Please <a href="https://tally.so/r/wgbEqP" className="link" target="_blank" rel="noreferrer">register for the Virtual Fair here</a>.
            </p>
            <p>
              Please <a href="https://tally.so/r/w7LakL" className="link" target="_blank" rel="noreferrer">register for the In-Person Fair here</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--events section--additional-events" id="additional-events">
        <div className="container">
          <h2 className="heading-secondary">Additional Events</h2>
          <div className="paragraphs">
            <p>
              In addition to our annual Visualization Industry Fair, VIF also hosts portfolio reviews, mock interviews, and our alumni mixer!
              Below are the dates and registration forms for these events. Instructions on how to participate are in the registration forms.
              We hope to see you there!
            </p>
          </div>
          
          <div className="events">
            <Event
              eventName="Virtual Portfolio Reviews"
              eventBoxes={[
                <EventBox
                  heading="Fall"
                  headingLink="https://tally.so/r/mZEZxy"
                  events={[
                    ['Thursday', 'October', 19, ['10am', '4pm']],
                    ['Friday', 'October', 20, ['10am', '4pm']],
                  ]}
                />,

                <EventBox
                  heading="Spring"
                  headingLink="https://tally.so/r/w2jpVb"
                  events={[
                    ['Thursday', 'January', 25, ['10am', '4pm']],
                    ['Friday', 'January', 26, ['10am', '4pm']],
                  ]}
                />
              ]}
            />

            <Event
              eventName="Virtual Mock Interviews"
              eventBoxes={[
                <EventBox
                  heading="Fall"
                  headingLink="https://tally.so/r/nrDMRL"
                  events={[
                    ['Friday', 'November', 3, ['10am', '4pm']],
                  ]}
                />,

                <EventBox
                  heading="Spring"
                  headingLink="https://tally.so/r/w2a7yg"
                  events={[
                    ['Friday', 'February', 3, ['10am', '4pm']],
                  ]}
                />
              ]}
            />

            <Event
              eventName="Alumni Mixer"
            >
              <div className="paragraphs">
                <p>
                  Our Alumni Mixer is a new event on <strong>Friday, November 10<sup>th</sup>, 2023, from 7pm–10pm CST. </strong>
                  It is an opportunity for current students to network with former students within and outside of the industry,
                  allowing them to network in a casual setting and introduce new faces into the Viz Aggie Network community.
                  <strong> All participants must RSVP in order to attend.</strong>
                </p>

                <div className="photo-and-paragraph">
                  <p>
                    The Alumni Mixer is being held at <a href="https://maps.app.goo.gl/LntciY62AtJRsrUZ8" className="link" target="_blank" rel="noreferrer">The Corner Bar and Grill</a>,
                    located at 401 University Dr, College Station, TX 77840. VIF will be catering a fixed menu and non-alcoholic beverages.
                    Expenses such as parking and alcoholic beverages will not be covered by VIF. <a href="https://tally.so/r/nrOlON" className="link" target="_blank" rel="noreferrer">
                    Register for the event here</a>.
                  </p>

                  <picture className="building-photo-picture">
                    <source srcSet={require(`../../../images/misc/corner-bar-and-grill-min.webp`)} type="image/webp" />
                    <source srcSet={require(`../../../images/misc/corner-bar-and-grill-min.jpg`)} type="image/jpeg" />
                    <img src={require(`../../../images/misc/corner-bar-and-grill-min.jpg`)} alt={`The Corner Bar and Grill`} className="building-photo-img" />
                  </picture>
                </div>
              </div>
            </Event>
          </div>
        </div>
      </section>

      <section className="section section--past-companies" id="past-companies">
        <div className="container">
          <h2 className="heading-secondary">Past Companies</h2>
          <div className="paragraphs">
            <p>
              Past fairs have included some of the following companies:
            </p>
          </div>
          <ul className="past-company-list">
            {renderPastCompanies(pastCompanies)}
          </ul>
        </div>
      </section>
    </main>
  );
}

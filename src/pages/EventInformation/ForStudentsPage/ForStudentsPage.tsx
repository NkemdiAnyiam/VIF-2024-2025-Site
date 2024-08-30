import React from 'react';

import { SearchEngineOpt } from '../../../components/SearchEngineOpt/SearchEngineOpt';

import { Header } from '../../../components/Header/Header';
import { Event } from '../../../components/Event/Event';
import { EventBox } from '../../../components/EventBox/EventBox';
import { pastCompanies } from '../../../data/companies';
import { fairTimes } from '../../../data';

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
        title={`For Students | Viz Industry Fair ${fairTimes.yearEnDashRange}`}
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
              <strong> The Virtual Fair will be held Thursday, February 20<sup>th</sup>, 2025, from 10am–4pm CST via Discord.</strong>
              <strong> The In-Person Fair will be held Friday, February 21<sup>st</sup>, 2025, from 10am–4pm CST on the TAMU campus (Location To Be Determined).</strong>
            </p>

            <p className="no-gap">
              <strong>Before you register for the Fair, </strong>please <a href="https://docs.google.com/forms/d/e/1FAIpQLSeoB9qfICTNYIYsUCqZSEnqLXFpznto27DDqN_6iEeRWjHZfg/viewform?usp=sf_link" className="link" target="_blank" rel="noreferrer">register for our new Professionalism Workshop</a>!
              This workshop serves as an informational for the VIF events and teaches you best practices for communicating with industry professionals.
              To uphold the professional standards of Texas A&M University, current students are <strong>required</strong> to
              attend one of the three professionalism workshops before attending the industry fair or any other VIF event.
              Current students who attempt to register for an event without first attending a workshop day will be removed from the registration list.
              Former students are not required to attend a workshop, but it is encouraged!
              The workshops will be held on the following dates:
            </p>

            <ul className="no-gap">
              <li>
                <strong>Fall 2024</strong>
                <ul>
                  <li>Tuesday, September 24<sup>th</sup>, 10am–12pm</li>
                  <li>Wednesday, September 25<sup>th</sup>, 10am–12pm</li>
                  <li>Friday, September 27<sup>th</sup>, 3pm–5pm</li>
                </ul>
              </li>
              <li>
                <strong>Spring 2025</strong>
                <ul>
                  <li>Tuesday, January 14<sup>th</sup>, 10am–12pm</li>
                  <li>Wednesday, January 15<sup>th</sup>, 10am–12pm</li>
                  <li>Friday, January 17<sup>th</sup>, 3pm–5pm</li>
                </ul>
              </li>
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
              Please <a href="https://docs.google.com/forms/d/e/1FAIpQLSc3fUZpRlQ6cb70fEC-5DQzMclIu9UIV3qOd-aIdMGwq3BjOw/viewform?usp=sf_link" className="link" target="_blank" rel="noreferrer">register for the Virtual Fair here</a>.
            </p>
            <p>
              Please <a href="https://docs.google.com/forms/d/e/1FAIpQLScSyjIGDruxEXK9J5VTcyX2cs0AtWVAkAZaIEWcIUjWwl4t4g/viewform?usp=sf_link" className="link" target="_blank" rel="noreferrer">register for the In-Person Fair here</a>.
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
                  headingLink={`https://docs.google.com/forms/d/e/1FAIpQLSf7nnaYybNwZOKcpEiMSdKaqul86TqGAwHhvwsDaUV4nVZv9Q/viewform?usp=sf_link`}
                  events={[
                    ["Friday", "October", 18, 2024, ['10am', '4pm']],
                    ["Saturday", "October", 19, 2024, ['10am', '4pm']],
                  ]}
                />,

                <EventBox
                  heading="Spring"
                  headingLink={`https://docs.google.com/forms/d/e/1FAIpQLSer6Vvt7GMlDyuiJZpm3DGcNmCRmZY9mZo1mMWG2w_lmlV7Aw/viewform?usp=sf_link`}
                  events={[
                    ["Friday", "January", 24, 2025, ['10am', '4pm']],
                    ["Saturday", "January", 25, 2025, ['10am', '4pm']],
                  ]}
                />
              ]}
            />

            <Event
              eventName="Virtual Mock Interviews"
              eventBoxes={[
                <EventBox
                  heading="Fall"
                  headingLink={`https://docs.google.com/forms/d/e/1FAIpQLScv0r3HDa4H61GPp8aigegVrpgSCFUy62Z2TJlG1dwdAVZV0w/viewform?usp=sf_link`}
                  events={[
                    ["Friday", "November", 8, 2024, ['10am', '4pm']],
                  ]}
                />,

                <EventBox
                  heading="Spring"
                  headingLink={`https://docs.google.com/forms/d/e/1FAIpQLSdVzGMG3G4I9buRM4bO8UTjeq_QhYlFa0KloeHkvPQNIviw1A/viewform?usp=sf_link`}
                  events={[
                    ["Friday", "February", 7, 2025, ['10am', '4pm']],
                  ]}
                />
              ]}
            />

            <Event
              eventName="Alumni Mixer"
            >
              <div className="paragraphs">
                <p>
                  Our Alumni Mixer is a new event on <strong>Saturday, November 16<sup>th</sup>, 2024, from 7pm–10pm CST. </strong>
                  It is an opportunity for current students to network with former students within and outside of the industry,
                  allowing them to network in a casual setting and introduce new faces into the Viz Aggie Network community.
                  <strong> All participants must RSVP in order to attend.</strong>
                </p>

                <div className="photo-and-paragraph">
                  <p>
                    Once we have secured a venue for this event, an announcement email will be sent out with more details,
                    and an update will be posted here on our website. VIF will be catering a fixed menu and non-alcoholic beverages.
                    Expenses such as parking and alcoholic beverages will not be covered by VIF. <a href="https://docs.google.com/forms/d/e/1FAIpQLSdyRn-3dVB9q_1qfkP2MTx3cjOKjHkQRONqQwFFUQvwUhjoEQ/viewform?usp=sf_link" className="link" target="_blank" rel="noreferrer">Register for the event here</a>.
                  </p>

                  <picture className="building-photo-picture">
                    <source srcSet={require(`../../../images/misc/alumni-mixer-photo-min.webp`)} type="image/webp" />
                    <source srcSet={require(`../../../images/misc/alumni-mixer-photo-min.jpg`)} type="image/jpeg" />
                    <img src={require(`../../../images/misc/alumni-mixer-photo-min.jpg`)} alt={`Alumni Mixer`} className="building-photo-img" />
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

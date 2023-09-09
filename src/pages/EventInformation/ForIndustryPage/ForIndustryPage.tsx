import React from 'react';
import { Link } from 'react-router-dom';

import { SearchEngineOpt } from '../../../components/SearchEngineOpt/SearchEngineOpt';

import { EventBox } from '../../../components/EventBox/EventBox';
import { Event } from '../../../components/Event/Event';
import { Header } from '../../../components/Header/Header';

export function ForIndustryPage(): JSX.Element {
  return (
    <main className="for-industry-page">
      <SearchEngineOpt
        title="For Industry | Viz Industry Fair 2024"
        description="Employers and industry guests will find important information about the Viz Industry Fair, including registration forms and volunteer opportunities."
      />

      <Header type="normal" imageName={'seated-group-photo-2-min'}>
        <h1 className="heading-primary">
          For Industry
        </h1>
      </Header>

      <section className="section section--welcome-industry" id="industry-welcome">
        <div className="container">
          <h2 className="heading-secondary">
            Welcome, Employers!
          </h2>

          <div className="paragraphs">
            <p>
              Welcome, and thank you for joining us this year at the Visualization Industry Fair! It is your generosity that makes our events happen.
              The time that you donate to our students makes a lasting impact on their academic success and fuels the Aggie network that we are so proud of.
            </p>

            <p>
              If you are a new company/organization and are interested in attending this fair, welcome!
              You can find the <a href="https://tally.so/r/mJpWyd" className="link" target="_blank" rel="noreferrer">Industry Registration form here</a>.
              Please make sure to fill out our form—this will ensure you a "table" at the fair and help us with planning the event.
              Our Visualization Industry Fair is held both virtually and in-person, and in the form you have the option to attend either one or both.
              Additionally, VIF has access to presentation and interview rooms during the fair.
              If your company/organization would like to hold a presentation on a specific topic or interview students,
              please fill out the specified area in the registration form.
            </p>

            <p>
              If you cannot attend the Visualization Industry Fair but would still like to contribute some time to our students,
              please consider attending our portfolio reviews and mock interviews. These events are entirely virtual, and they will
              allow you to meet with students one-on-one and give feedback on their work and professional presentation.
              You will find links to the registration forms for the events
              in the <a className="link" href="/event-information/for-industry#volunteer-events">Volunteer Events section</a> below.
            </p>

            <p>
              For additional information about the Visualization Department at Texas A&M University,
              visit the <Link to="/about/about-viz" className="link">About Viz page</Link>.
              If you have any questions, concerns, or specific needs, please contact our committee members
              at <a href="mailto:pvfavizindustryfair@tamu.edu" className="link">pvfavizindustryfair@tamu.edu</a> and/or
              Glen Vigus at <a href="mailto:gvigus@arch.tamu.edu" className="link">gvigus@arch.tamu.edu</a> as soon as possible so we can address them
              prior to the fair.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--events section--volunteer-events" id="volunteer-events">
        <div className="container">
          <h2 className="heading-secondary">Volunteer Events</h2>

          <div className="events">
            <Event
              eventName="Virtual Portfolio Reviews"
              eventBoxes={[
                <EventBox
                  heading="Fall"
                  headingLink={`https://tally.so/r/3NlRzQ`}
                  events={[
                    ["Thursday", "October", 19, ['10am', '4pm']],
                    ["Friday", "October", 20, ['10am', '4pm']],
                  ]}
                />,

                <EventBox
                  heading="Spring"
                  headingLink={`https://tally.so/r/mJpW7d `}
                  events={[
                    ["Thursday", "January", 25, ['10am', '4pm']],
                    ["Friday", "January", 26, ['10am', '4pm']],
                  ]}
                />
              ]}
            >
              <div className="paragraphs">
                <p>
                  If you would like to volunteer to review student portfolios, please register below.
                </p>
              </div>
            </Event>

            <Event
              eventName="Virtual Mock Interviews"
              eventBoxes={[
                <EventBox
                  heading="Fall"
                  headingLink={`https://tally.so/r/3NldyN`}
                  events={[
                    ["Friday", "November", 3, ['10am', '4pm']],
                  ]}
                />,

                <EventBox
                  heading="Spring"
                  headingLink={`https://tally.so/r/w8aROx`}
                  events={[
                    ["Friday", "February", 2, ['10am', '4pm']],
                  ]}
                />
              ]}
            >
              <div className="paragraphs">
                <p>
                  If you would like to volunteer for student mock interviews, please register below.
                </p>
              </div>
            </Event>
          </div>
          
        </div>
      </section>

      <div className="section section--see-you-there">
        <div className="container">
          <div className="paragraphs">
            <p className="cta-text">
              <span>We look forward to seeing you!</span> <span>Thanks and Gig'em!</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

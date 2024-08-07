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
        title="For Industry | Viz Industry Fair 2024–25"
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
              Welcome, and thank you for joining us this year at the Visualization Industry Fair (VIF)! It is your generosity that makes our events happen.
              The time that you donate to our students makes a lasting impact on their academic success and fuels the Aggie network that we are so proud of.
            </p>

            <p>
              If you are a new company/organization and are interested in attending this fair, welcome!
              Please make sure to fill out our form—this will ensure you a "table" at the fair and help us with planning the event.
              Our Visualization Industry Fair is held both virtually and in-person—in the form, you have the option to attend either one or both.
              <br />
              <strong> The Virtual Fair will be held Thursday, February 20<sup>th</sup>, 2025, from 10am–4pm CST via Discord.</strong>
              <br />
              <strong> The In-Person Fair will be held Friday, February 21<sup>st</sup>, 2025, from 10am–4pm CST on TAMU campus (Location TBD).</strong>
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc9py6MJjTf5IecnIta7BFZaSo7mm1YwfEFc5OYmSsYAkENeQ/viewform?usp=sf_link"
              className="registration-button registration-button--red"
              target="_blank"
              rel="noreferrer"
            >
              Register Here
            </a>

            <p>
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
              at <a href="mailto:pvfavizindustryfair@tamu.edu" className="link">pvfavizindustryfair@tamu.edu</a> as soon as possible
              so we can address them prior to the fair.
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
                  headingLink={`https://docs.google.com/forms/d/e/1FAIpQLSfNS-ZJFzCvcigJAELoKFY34j_i9ZzIRivrmR8J1JUsgQNQrQ/viewform?usp=sf_link`}
                  events={[
                    ["Friday", "October", 18, ['10am', '4pm']],
                    ["Saturday", "October", 19, ['10am', '4pm']],
                  ]}
                />,

                <EventBox
                  heading="Spring"
                  headingLink={`https://docs.google.com/forms/d/e/1FAIpQLSd1mOyhl7UGzctZqxngIk16Bm_eeoyZQrq2hMJk-YnvZbcK5w/viewform?usp=sf_link`}
                  events={[
                    ["Friday", "January", 24, ['10am', '4pm']],
                    ["Saturday", "January", 25, ['10am', '4pm']],
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
                  headingLink={`https://docs.google.com/forms/d/e/1FAIpQLSflSAGSoFqtyLXA7ZwJpHv_TibVa7IE5whkKU16ipSqTvp0iQ/viewform?usp=sf_link`}
                  events={[
                    ["Friday", "November", 8, ['10am', '4pm']],
                  ]}
                />,

                <EventBox
                  heading="Spring"
                  headingLink={`https://docs.google.com/forms/d/e/1FAIpQLSfVjJZ7Wsu8FoHDF6c1aGHvlL2oqI7pIeWgX9X4L0JTX5wbKg/viewform?usp=sf_link`}
                  events={[
                    ["Friday", "February", 7, ['10am', '4pm']],
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

            

            {/* TODO: get new dates */}
            <Event
              eventName="Alumni Mixer"
            >
              <div className="paragraphs paragraphs--align-left">
                <p>
                  Our Alumni Mixer is a new event on <strong>Friday, November 10<sup>th</sup>, 2023, from 7pm–10pm CST. </strong>
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

      <section className="section section--see-you-there">
        <div className="container">
          <div className="paragraphs">
            <p className="cta-text">
              <span>We look forward to seeing you!</span> <span>Thanks and Gig'em!</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

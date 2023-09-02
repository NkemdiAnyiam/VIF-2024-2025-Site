import React from 'react';
import { Link } from 'react-router-dom';

import { SearchEngineOpt } from '../../../components/SearchEngineOpt/SearchEngineOpt';

import { EventBox } from '../../../components/EventBox/EventBox';

export function ForIndustryPage(): JSX.Element {
  return (
    <main className="for-industry-page">
      <SearchEngineOpt
        title="For Industry - Viz Industry Fair 2024"
        description="Employers and industry guests will find important information about the Viz Industry Fair, including registration forms and volunteer opportunities."
      />

      <header className="banner">
        <div className="banner__background"></div>
        <div className="container">
          <h1 className="heading-primary">
            For Industry
          </h1>
        </div>
      </header>

      <section className="section section--welcome-industry" id="industry-welcome">
        <div className="container">
          <h2 className="heading-secondary">
            Welcome, Employers!
          </h2>

          <div className="paragraphs">
            <p>
              Welcome, and thank you for joining us this year at the Visualization Industry Fair!
              Please email our student representatives at <a href="mailto:pvfavizindustryfair@tamu.edu" className="link">pvfavizindustryfair@tamu.edu</a> as
              early as possible if you have any specific needs so we can address them prior to the fair.
            </p>

            <p>
              <strong>Before your arrival</strong>, please make sure you have filled out our registration form.
              This will ensure you a “table” at the fair and help us with planning the event.
              To register, please click on this <a href="https://tally.so/r/mJpWyd" className="link" target="_blank" rel="noreferrer">Industry Registration link</a>.
            </p>

            <p>
              For additional information about the Visualization Department at Texas A&M University,
              visit the <Link to="/about/about-viz" className="link">About Viz page</Link>.
              If you have any questions or concerns, please contact our committee members
              at <a href="mailto:pvfavizindustryfair@tamu.edu" className="link">pvfavizindustryfair@tamu.edu</a> and/or
              Glen Vigus at <a href="mailto:gvigus@arch.tamu.edu" className="link">gvigus@arch.tamu.edu</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--virtual-portfolio-reviews" id="virtual-portfolio-review-dates">
        <div className="container">
          <h2 className="heading-secondary">Virtual Portfolio Reviews</h2>
          <div className="paragraphs">
            <p>If you would like to volunteer to review student portfolios, please register below.
            </p>
          </div>
          <div className="event-boxes">
            <EventBox
              heading="Fall"
              headingLink={`https://tally.so/r/3NlRzQ`}
              events={[
                ["Thursday", "October", 19, ['10am', '4pm']],
                ["Friday", "October", 20, ['10am', '4pm']],
              ]}
            />
            <EventBox
              heading="Spring"
              headingLink={`https://tally.so/r/mJpW7d `}
              events={[
                ["Thursday", "January", 25, ['10am', '4pm']],
                ["Friday", "January", 26, ['10am', '4pm']],
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section section--virtual-mock-interviews" id="virtual-mock-interview-dates">
        <div className="container">
          <h2 className="heading-secondary">Virtual Mock Interviews</h2>
          <div className="paragraphs">
            <p>If you would like to volunteer for student mock interviews, please register below.
            </p>
          </div>
          <div className="event-boxes">
            <EventBox
              heading="Fall"
              headingLink={`https://tally.so/r/3NldyN`}
              events={[
                ["Friday", "November", 3, ['10am', '4pm']],
              ]}
            />
            <EventBox
              heading="Spring"
              headingLink={`https://tally.so/r/w8aROx`}
              events={[
                ["Friday", "February", 2, ['10am', '4pm']],
              ]}
            />
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

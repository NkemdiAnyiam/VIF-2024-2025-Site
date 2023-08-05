import React from 'react';

import { SearchEngineOpt } from '../../components/SearchEngineOpt/SearchEngineOpt';

import { EventBox } from '../../components/EventBox/EventBox';

export function HomePage(): JSX.Element {
  return (
    <main className="home-page">
      <SearchEngineOpt
        title="Viz Industry Fair 2024"
        description="The Viz Industry Fair is an opportunity for students and alumni to connect with prospective employers in leading industries AND receive professional feedback."
      />
      <header className="banner">
        <div className="banner__background"></div>
        <div className="container">
          <h1 className="heading-primary">
            <span>Welcome to the 2024</span> <span>VIZ Industry Fair!</span>
          </h1>
          <p className="banner__intro-text">
            Viz Industry Fair (VIF) is both an organization and annual event dedicated to career planning and success for students within the new school
            of Performance, Visualization and Fine Arts (PVFA).
          </p>
        </div>
      </header>

      <section className="section section--introduction" id="introduction">
        <div className="container">
          <h2 className="heading-secondary">Introduction</h2>
          <div className="paragraphs">
            <p>
              This event is an opportunity for students and alumni interested in Visualization, which includes Animation, Gaming, Graphics
              and Interactive technologies, to connect with prospective employers working in high level positions in some of today's leading industries
              and receive professional feedback on their work. <strong>The Fair will be held Friday, February 23<sup>rd</sup>, 2024 from 10am–4pm.</strong>
            </p>
            <p>
              This year, we are inviting former students to participate in both our virtual and in-person events at the same level as our current students,
              so they can continue their journey of lifelong learning and receive advice from our industry representatives.
            </p>
            <p>
              Because of continuing concerns with accessibility, we will be holding a virtual fair this year as well.
              <strong> The virtual fair will take place Thursday, February 22<sup>nd</sup>, 2024 from 10am–4pm on Discord.</strong>
            </p>
            <p>
              The Viz Industry Fair is a student-run organization. These dedicated students, with focuses in Game Development, Animation, and Interactive Media,
              such as UI/UX and web design, reach out to companies, create the Fair content and website, and run the social media campaign of the Fair and other events.
            </p>
            <p>
              Along with this year's fair, The VIF Committee has put together several other events throughout the school year.
              These include industry speakers, workshops, portfolio & resume reviews, and mock interviews.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--virtual-portfolio-reviews" id="virtual-portfolio-review-dates">
        <div className="container">
          <h2 className="heading-secondary">Virtual Portfolio Reviews</h2>
          <div className="event-boxes">
            <EventBox
              season="Fall"
              events={[
                ["Thursday", "October", 19, ['10am', '4pm']],
                ["Friday", "October", 20, ['10am', '4pm']],
              ]}
            />
            <EventBox
              season="Spring"
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
          <div className="event-boxes">
            <EventBox
              season="Fall"
              events={[
                ["Friday", "November", 3, ['10am', '4pm']],
              ]}
            />
            <EventBox
              season="Spring"
              events={[
                ["Friday", "February", 2, ['10am', '4pm']],
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section section--cta" id="cta">
        <div className="container">
          <p className="cta-text">
            <span>We look forward to seeing you</span> <span>at our many events and the fair!</span>
          </p>
          <div className="registration-buttons">
            {/* TODO: Get actual links */}
            <a href="#" className="registration-button registration-button--yellow">Student Registration</a>
            <a href="#" className="registration-button registration-button--red">Industry Registration</a>
          </div>
        </div>
      </section>
    </main>
  );
}

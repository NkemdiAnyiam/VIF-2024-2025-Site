import React from 'react';
import { Link } from 'react-router-dom';

import { EventBox } from '../../../components/EventBox/EventBox';

export function ForStudentsPage(): JSX.Element {
  return (
    <main className="for-students-page">
      <header className="banner">
        <div className="banner__background"></div>
        <div className="container">
          <h1 className="heading-primary">
            For Students
          </h1>
        </div>
      </header>

      <section className="section section--welcome-students" id="students-welcome">
        <div className="container">
          <h2 className="heading-secondary">
            Welcome, Vizzers!
          </h2>

          <div className="paragraphs">
            <p>
              The Visualization Industry Fair is an opportunity for students interested in Animation, Gaming, Graphics,
              and Interactive technologies to connect with prospective employers working in high level positions
              in some of today's leading industries and receive professional feedback on their work.
              The virtual Fair will be held Thursday, February 22<sup>nd</sup>, 2024, from 10am–4pm via Discord.
              The In-Person fair will be held Friday, February 23<sup>rd</sup>, 2024, from 10am–4pm in MSC 2406.
            </p>

            <p className="no-gap">
              {/* TODO: Get actual link */}
              <strong>Before you register for the fair</strong>, please <a href="#" className="link">register for our new Professionalism Workshop</a>!
              This workshop serves as an informational to the VIF events and teaches you best practices for communicating with industry professionals.
              To uphold the professional standards of Texas A&M University, it is required for current students
              to attend one of the three professionalism workshops in order to attend the industry fair or any other VIF event.
              Former students are not required to attend a workshop, but it is encouraged!
              The workshops will be held on the following dates:
            </p>

            <ul>
              <li>Monday, September 25<sup>th</sup></li>
              <li>Wednesday, September 27<sup>th</sup></li>
              <li>Friday, September 29<sup>th</sup></li>
            </ul>

            <p>
              {/* TODO: Get actual link */}
              To register for the fair itself, you'll need a downloadable version of your resume and a link to your portfolio website.
              Please <a href="#" className="link">register for the fair here</a>.
            </p>
          </div>
        </div>
      </section>

      {/* <div className="section section--past-companies" id="past-companies">
        <div className="container">
          <h2 className="heading-secondary">Past Companies</h2>
          <div className="paragraphs">
            <p>
              Past fairs have included some of the following companies
            </p>
          </div>
        </div>
      </div> */}
    </main>
  );
}

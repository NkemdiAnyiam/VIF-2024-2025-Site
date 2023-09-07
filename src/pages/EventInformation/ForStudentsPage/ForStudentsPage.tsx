import React from 'react';

import { SearchEngineOpt } from '../../../components/SearchEngineOpt/SearchEngineOpt';

import { Header } from '../../../components/Header/Header';

type PastCompany = {
  companyName: string;
}

const pastCompanies: PastCompany[] = [
  { companyName: "Aggieland Outfitters" },
  { companyName: "Texas Film Commission" },
  { companyName: "Texas Moving Picture Alliance (TXMPA)" },
  { companyName: "Electronic Arts" },
  { companyName: "NOKIA" },
  { companyName: "N3D Studios Incorporated" },
  { companyName: "Powerhouse Animation" },
  { companyName: "SunSpear Games" },
  { companyName: "Pumps & Pipes" },
  { companyName: "Houston Methodist Institute for Technology, Innovation and Education" },
  { companyName: "Gearbox Software" },
  { companyName: "Aquifer" },
  { companyName: "Digital Seat Media" },
  { companyName: "Enduring Games" },
  { companyName: "C.C. Creations" },
  { companyName: "Booz Allen Hamilton, Inc." },
  { companyName: "Cloud Imperium Games" },
  { companyName: "Viasat" },
];
pastCompanies.sort((a, b) => a.companyName.toLowerCase() <= b.companyName.toLowerCase() ? -1 : 1);

const renderPastCompanies = (companies: PastCompany[]) => {
  return companies.map(({ companyName }) => {
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
        description="Students will find important information about the Viz Industry Fair, including registration forms and a growing list of attending companies."
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
              The Visualization Industry Fair is an opportunity for students interested in Animation, Gaming, Graphics,
              and Interactive technologies to connect with prospective employers working in high level positions
              in some of today's leading industries and receive professional feedback on their work.
              The Virtual Fair will be held Thursday, February 22<sup>nd</sup>, 2024, from 10am–4pm via Discord.
              The In-Person Fair will be held Friday, February 23<sup>rd</sup>, 2024, from 10am–4pm in MSC 2406.
            </p>

            <p className="no-gap">
              <strong>Before you register for the Fair</strong>, please <a href="https://tally.so/r/3xMRPE" className="link" target="_blank" rel="noreferrer">register for our new Professionalism Workshop</a>!
              This workshop serves as an informational to the VIF events and teaches you best practices for communicating with industry professionals.
              To uphold the professional standards of Texas A&M University, current students are <strong>required</strong> to
              attend one of the three professionalism workshops before attending the industry fair or any other VIF event.
              Current students who attempt to register for an event without first attending a workshop day will be removed from the registration list.
              Former students are not required to attend a workshop, but it is encouraged!
              The workshops will be held on the following dates:
            </p>

            <ul>
              <li>Monday, September 25<sup>th</sup></li>
              <li>Wednesday, September 27<sup>th</sup></li>
              <li>Friday, September 29<sup>th</sup></li>
            </ul>

            <p>
              To register for the fair itself, you'll need a downloadable version of your resume and a link to your portfolio website.
              Please <a href="https://tally.so/r/w7LakL" className="link" target="_blank" rel="noreferrer">register for the Fair here</a>.
            </p>
          </div>
        </div>
      </section>

      <div className="section section--past-companies" id="past-companies">
        <div className="container">
          <h2 className="heading-secondary">Past Companies</h2>
          <div className="paragraphs">
            <p>
              Past Fairs have included some of the following companies
            </p>
          </div>
          <ul className="past-company-list">
            {renderPastCompanies(pastCompanies)}
          </ul>
        </div>
      </div>
    </main>
  );
}

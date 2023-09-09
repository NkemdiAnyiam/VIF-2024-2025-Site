import React from 'react';

import { SearchEngineOpt } from '../../components/SearchEngineOpt/SearchEngineOpt';

import { Header } from '../../components/Header/Header';

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
              On this page, you will be able to see which companies are attending the fair, <span className="italicized">when</span> they will be attending,
              and what kinds of students each company is looking to hire. There is nothing to see here yet, but stay tuned—any company that registers for the
              Virtual or In-Person Fair will show up here.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

import React from 'react';

export function HomePage() {
  return (
    <main className="home-page">
      <header className="banner">
        <div className="banner__background"></div>
        <div className="container">
          <h1 className="heading-primary">
            <span>Welcome to the 2024</span> <span>VIZ Industry Fair!</span>
          </h1>
          <p className="banner__intro-text">
            Viz Industry Fair (VIF) is both an organization and annual event dedicated to career planning and success for students within the new school of Performance, Visualization and Fine Arts (PVFA).
          </p>
        </div>
      </header>
      <section className="section section--home">
        <div className="container">
          <div className="paragraphs">
            <p>
              This event is an opportunity for students and alumni interested in Visualization, which includes Animation, Gaming, Graphics and Interactive technologies, to connect with prospective employers working in high level positions in some of today's leading industries and receive professional feedback on their work. The Fair will be held Friday, February 23rd, 2024 from 10am-4pm.
            </p>
            <p>
              This year, we are inviting former students to participate in both our virtual and in-person events at the same level as our current students, so they can continue their journey of lifelong learning and receive advice from our industry representatives.
            </p>
            <p>
              Along with this year's fair, The VIF Committee has also put together several other events throughout the school year. These include industry speakers, workshops, portfolio & resume reviews and mock interviews.
            </p>
            <p>
              Because of continuing concerns with accessibility, we will be holding a virtual fair this year as well. The virtual fair will take place Thursday, February 22nd, 2024 from 10am-4pm on Discord.
            </p>
            <p>
              The Viz Industry Fair is a student-run organization. These dedicated students, with focuses in Game Development, Animation, and Interactive Media, such as UI/UX and web design, reach out to companies, create the Fair content and website, and run the social media campaign of the Fair and other events.
            </p>
            <p>
              Along with this year's fair, The VIF Committee has also put together several other events throughout the school year. These include industry speakers, workshops, portfolio & resume reviews and mock interviews.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
// import ReactDOMServer from 'react-dom/server';

import { SearchEngineOpt } from '../../../components/SearchEngineOpt/SearchEngineOpt';

import { QuestionBox } from './QuestionBox/QuestionBox';
import { Header } from '../../../components/Header/Header';

type QA = {
  question: string;
  content: JSX.Element;
  // safeContent?: JSX.Element;
};

const studentQAs: QA[] = [
  {
    question: "Do I need to register to attend the Industry Fair?",
    content: (
      <>
        <p>
          YES!
          Please <a className="link" href="https://docs.google.com/forms/d/e/1FAIpQLSc3fUZpRlQ6cb70fEC-5DQzMclIu9UIV3qOd-aIdMGwq3BjOw/viewform?usp=sf_link" target="_blank" rel="noreferrer" aria-label='Open Virtual Registration Form'>register for the Virtual Fair here</a>.
          Please <a className="link" href="https://docs.google.com/forms/d/e/1FAIpQLScSyjIGDruxEXK9J5VTcyX2cs0AtWVAkAZaIEWcIUjWwl4t4g/viewform?usp=sf_link" target="_blank" rel="noreferrer" aria-label='Open In-Person Registration Form'>register for the In-Person Fair here</a>.
        </p>

        <p>
          <strong>For in-person fairs:</strong> Upon registration, your contact information will be made available
          to company representatives who may need to contact you after the Industry Fair.
          Please bring copies of your resume and business cards if applicable.
        </p>
        <p>

          <strong>For Virtual Fairs:</strong> Please make sure your virtual name is your first and last name followed by your focus.
          For example: "Mayet Andreassen - Modeling/LookDev", or "Mayet Andreassen - UI/UX", etc.
          Please turn on your cameras, present yourself in professional attire with adequate lighting, and be mindful of any background noise in your area.
        </p>
      </>
    ),
  },

  {
    question: "Do I need to attend BOTH the virtual fair and in-person fair?",
    content: (
      <>
        <p>
          Students are not required to attend both events but <strong>we highly recommend it</strong> since
          not all companies attending the virtual fair will attend the in-person fair and vice versa.
        </p>
      </>
    ),
  },

  {
    question: "What should I do before the Industry Fair?",
    content: (
      <>
        <p>
          <a className="link" href="https://docs.google.com/forms/d/e/1FAIpQLSeoB9qfICTNYIYsUCqZSEnqLXFpznto27DDqN_6iEeRWjHZfg/viewform?usp=sf_link" target="_blank" rel="noreferrer"><strong>REGISTER FOR THE PROFESSIONALISM WORKSHOP!</strong></a>
        </p>

        <p>
          To uphold the professional standards of Texas A&M University, we require all current students to register for
          and attend our Professionalism Workshop. There are three workshops, but you only need to attend one.
        </p>

        <p className="no-gap">
          The dates for these workshops are as follows:
        </p>
        <ul>
          <li>Tuesday, September 24<sup>th</sup>, 10am–12pm</li>
          <li>Wednesday, September 25<sup>th</sup>, 10am–12pm</li>
          <li>Friday, September 27<sup>th</sup>, 3pm–5pm</li>
        </ul>

        <p>
          Current students are <strong>required to attend one workshop</strong> if they wish to attend any of the portfolio reviews,
          mock interviews, or the virtual/in-person industry fair. The workshops are virtual via Zoom.
          Students who register for the workshops will be emailed the Zoom link.
        </p>

        <p>
          If you cannot attend one of the workshop dates, please contact a committee member
          or email us at <a href="mailto:pvfavizindustryfair@tamu.edu" className="link">pvfavizindustryfair@tamu.edu</a> so
          we can send you the information and add you to our exceptions list.
        </p>
      </>
    ),
  },

  {
    question: "What if I'm a former student?",
    content: (
      <p>
        Welcome back! We're happy to have you. Please see the <Link className="link" to="/event-information/for-students">For Students page</Link> and
        check "Former Student" on your registration form.
      </p>
    ),
    // safeContent: (
    //   <p>
    //     Welcome back! We're happy to have you. Please see the <a className="link" href="/event-information/for-students">For Students page</a> and
    //     check "Former Student" on your registration form.
    //   </p>
    // )
  },

  {
    question: "What is the dress code?",
    content: (
      <p>
        You should wear clothes that are professionally appropriate for the position you are applying for.
        If you are unsure of what to wear, you should always dress to impress.
      </p>
    ),
  },

  {
    question: "Can I volunteer to help with the Industry Fair?",
    content: (
      <p>
        Absolutely! Student volunteers are essential for the Industry Fair to run smoothly.
        Please email our student representatives
        at <a href="mailto:pvfavizindustryfair@tamu.edu" className="link">pvfavizindustryfair@tamu.edu</a> if you are interested in participating.
      </p>
    ),
  },

  {
    question: "Does the Industry Fair count as an excused absence?",
    content: (
      <>
        <p>
          Career fairs can be considered an excused absence under Rule 07
          of the Texas A&M Attendance code, as they fall under the following section:
        </p>

        <p className="indented italicized">
          7.2.2.6 Mandatory interviews for permanent, full-time employment or full-time internships
          (including those that are part of a cooperative education program) that have a duration of at least 10 weeks,
          provided that such interviews are related to the student's academic program and provided that
          the interviews are fixed date by employer policy and cannot be rescheduled. <strong>A student may not request excused absences
          for employment or internship interviews for more than one scheduled class meeting in one academic term.</strong>
        </p>

        <p className="indented italicized">
          7.2.2.8 Participation in an activity appearing on the university authorized activity list.
        </p>

        <p>
          <strong className="italicized">However</strong>, there is a maximum of one (1) excused absence for interviews or employment related activities.
          Please plan your day accordingly so you don't miss the opportunity to speak with company representatives.
          Some professors may allow students to attend during regularly scheduled class time.
          <strong className="italicized"> Check with your professor regarding their policy for attending the Industry Fair.</strong> Make sure to
          notify your professors ahead of time.
        </p>
      </>
    ),
  },
];

const companyQAs: QA[] = [
  {
    question: "Can we review student resumes and portfolios prior to the Industry Fair so we can conduct interviews while we're there?",
    content: (
      <p>
        Certainly! Please include this request on your registration form and we will make them available to you.
      </p>
    ),
  },

  {
    question: "Is it mandatory to attend both fairs? Or either?",
    content: (
      <p>
        We are grateful for any amount of time you wish to dedicate towards our students, whether it is during our in-person
        or virtual events! Please only sign up for events that you feel comfortable attending.
        It is not mandatory to attend all of them, and if complications arise, please notify us for any cancellations
        or rescheduling at <a href="mailto:pvfavizindustryfair@tamu.edu" className="link">pvfavizindustryfair@tamu.edu</a>.
      </p>
    ),
  },

  {
    question: "Will there be food?",
    content: (
      <p>
        Yes! Our industry fair is catered to our industry representatives.
        Please list any dietary restrictions in your registration form.
      </p>
    ),
  },

  {
    question: "Will there be parking available?",
    content: (
      <p>
        Yes! After registration, when we have a total headcount of company representatives,
        parking passes will be purchased and distributed upon arrival.
      </p>
    ),
  },

  {
    question: "Who do I contact if I have other questions?",
    content: (
      <p>
        Please email our student representatives
        at <a href="mailto:pvfavizindustryfair@tamu.edu" className="link">pvfavizindustryfair@tamu.edu</a> if
        you have any questions or special needs.
      </p>
    ),
  },
];

const renderQuestions = (items: QA[], color: 'red' | 'green' | 'yellow' | 'purple') => {
  return items.map(({ question, content }, index) => {
    return (
      <li className="question-item" key={question}>
        <QuestionBox qNum={index + 1} question={question} color={color}>
          <div className="paragraphs">
            {content}
          </div>
        </QuestionBox>
      </li>
    );
  });
};

// const renderEntities = (items: QA[]) => {
//   return {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": items.map(({question, content}) => {
//       console.log( ReactDOMServer.renderToString(content) );
//       return {
//         "@type": "Question",
//         "name": question,
//         "acceptedAnswer": {
//           "@type": "Answer",
//           "text": ReactDOMServer.renderToString(content)
//         }
//       }
//     })
//   };
// };

export function CommonQuestionsPage(): JSX.Element {
  return (
    <main className="common-questions-page">
      <SearchEngineOpt
        title="Common Questions | Viz Industry Fair 2024–25"
        description="Here are common questions from students and employers about the Viz Industry Fair. If you cannot find an answer, email us at pvfavizindustryfair@tamu.edu."
        // structuredJSON={JSON.stringify(renderEntities(studentQAs))}
      />

      <Header type="normal" imageName={'seated-group-photo-2-min'}>
        <h1 className="heading-primary">
          Common Questions
        </h1>
      </Header>

      <section className="section section--student-questions" id="student-questions">
        <div className="container">
          <h2 className="heading-secondary">Students</h2>
          <ul className="question-list">
            {renderQuestions(studentQAs, 'yellow')}
          </ul>
        </div>
      </section>

      <section className="section section--company-questions" id="company-questions">
        <div className="container">
          <h2 className="heading-secondary">Companies</h2>
          <ul className="question-list">
            {renderQuestions(companyQAs, 'red')}
          </ul>
        </div>
      </section>
    </main>
  );
}

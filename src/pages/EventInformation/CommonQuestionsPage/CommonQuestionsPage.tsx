import React from 'react';
import { Link } from 'react-router-dom';

import { QuestionBox } from './QuestionBox/QuestionBox';

type QA = {
  question: string;
  content: JSX.Element;
};

// TODO: get proper links for everything within list
const studentQAs: QA[] = [
  {
    question: "Do I need to register to attend the Industry Fair?",
    content: (
      <>
        <p>YES! You must register <a className="link" href="#" target="_blank" rel="noreferrer">here</a>.</p>

        <p>
          <strong>For in-person fairs:</strong> Upon registration, your contact information will be made available
          to company representatives who may need to contact you after the Industry Fair.
          Please bring copies of your resume, and business cards if applicable.
        </p>
        <p>

          <strong>For Virtual Fairs:</strong> Please make sure your virtual name is your first and last name followed by your focus.
          For example: Mayet Andreassen - Modeling/LookDev, or Mayet Andreassen - UI/UX, etc.
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
          <a className="link" href="#" target="_blank" rel="noreferrer"><strong>REGISTER FOR THE PROFESSIONALISM WORKSHOP!</strong></a>
        </p>

        <p>
          To uphold the professional standards of Texas A&M University, we ask that all current students register
          and attend our Professionalism Workshop. There are three workshops; however, you only need to attend one.
        </p>

        <p className="no-gap">
          The dates for these workshops are as follows:
        </p>
        <ul>
          <li>Monday, September 25<sup>th</sup></li>
          <li>Wednesday, September 27<sup>th</sup></li>
          <li>Friday, September 29<sup>th</sup></li>
        </ul>

        <p>
          Current students are <strong>required</strong> to attend one workshop if they wish to attend any of the portfolio reviews,
          mock interviews, or the virtual/in-person industry fair. These workshops are hybrid, meaning they will take place in-person
          at <a className="link" href="#" target="_blank" rel="noreferrer">insert location here when we find one</a> and via Zoom.
          Students who register for the workshops will receive the Zoom link.
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
  },

  {
    question: "What is the dress code?",
    content: (
      <p>
        You should wear clothes that are professionally appropriate for the position for which you are applying.
        If you're unsure of what to wear, you should always dress to impress.
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
    question: "Are classes cancelled for the Industry Fair?",
    content: (
      <>
        <p>
          Though classes are not canceled, career fairs can be considered an excused absence under Rule 07
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
          <strong><em>However</em></strong>, there is a maximum of one (1) excused absence for interviews or employment related activities.
          Please plan your day accordingly so you don't miss the opportunity to speak with company representatives.
          Some professors may allow students to attend during regularly scheduled class time.
          <strong><em> Check with your professor regarding their policy for attending the Industry Fair.</em></strong> Make sure to
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
    question: "Is it mandatory to attend both events? Or either?",
    content: (
      <p>
        We are grateful for any amount of time you wish to dedicate towards our students, whether it is during or in-person,
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
            {content}</div>
        </QuestionBox>
      </li>
    );
  });
};

export function CommonQuestionsPage(): JSX.Element {
  return (<main className="common-questions-page">
    <header className="banner">
      <div className="banner__background"></div>
      <div className="container">
        <h1 className="heading-primary">
          Common Questions
        </h1>
      </div>
    </header>

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

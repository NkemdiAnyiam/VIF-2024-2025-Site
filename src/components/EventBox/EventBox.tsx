import React from 'react';

type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
type Month = 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December';
type Time = `${number}${'am' | 'pm'}`;

type EventData = [day: Day, month: Month, weekDate: number, timeRange: [startTime: Time, endTime: Time]];

export type EventBoxProps = {
  heading: string;
  headingLink?: string;
  events: EventData[];
  modifiers?: string[];
};

const monthToYear = (month: Month): number => {
  // TODO: Might have to change this logic in the future.
  // Logic is that Fall semester = 2023 and spring semester = 2024
  const yearNum = new Date(`${month} 1`).getMonth();
  if (yearNum >= 7) { return 2023; }
  else { return 2024; }
}

const getNthSunday = (month: Month, year: number, nthSunday: number): number => {
  let firstDayOfMonth = new Date(`${year} ${month} 1`);
  const daysToFirstSunday = (7 - firstDayOfMonth.getDay()) % 7;
  return firstDayOfMonth.getDate() + daysToFirstSunday + (7 * (nthSunday - 1));
}

const getCentralTimeZone = (month: Month, weekDate: number): 'CST' | 'CDT' => {
  const year = monthToYear(month);
  let marchDate = new Date(year, 2, 1);
  marchDate.setDate(getNthSunday('March', year, 2));
  const novemberDate = new Date(year, 10, 1);
  novemberDate.setDate(getNthSunday('November', year, 1));
  const eventDate = new Date(`${month} ${weekDate} ${year}`);

  return (eventDate >= marchDate && eventDate < novemberDate) ? 'CDT' : 'CST';
}

const getWeekDatePostfix = (weekDate: number) => {
  switch(weekDate) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default:
      if (weekDate < 1 || !Number.isInteger(weekDate)) { throw new Error(`Invalid week date ${weekDate}`); }
      return 'th';
  }
};

const generateListItems = (events: EventData[]): JSX.Element[] => {
  return events.map(([day, month, weekDate, [startTime, endTime]]) => {
    return (
      <li key={`${month} ${weekDate}`} className="event-box__item">
        <p className="event-box__date">{day}, {month} {weekDate}<sup>{getWeekDatePostfix(weekDate)}</sup></p>
        <p className="event-box__time">{startTime}–{endTime} {getCentralTimeZone(month, weekDate)}</p>
      </li>
    );
  });
};

export function EventBox(props: EventBoxProps): JSX.Element {
  return (
    <div className={`event-box${props.modifiers?.map(modifier => ` event-box--${modifier}`) ?? ''}`}>
      <h4 className="heading-quaternary">
        {
          props.headingLink
          ? <a href={props.headingLink} className="link" target="_blank" rel="noreferrer">{props.heading}</a>
          : props.heading
        }
      </h4>
      <ul className="event-box__dates-list">
        {generateListItems(props.events)}
      </ul>
    </div>
  );
}

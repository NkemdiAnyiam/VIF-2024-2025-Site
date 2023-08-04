import React from 'react';

type Season = 'Fall' | 'Spring';
type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
type Month = 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December';
type Time = `${number}${'am' | 'pm'}`;

type EventData = [day: Day, month: Month, weekDate: number, timeRange: [startTime: Time, endTime: Time]]

type EventBoxProps = {
  season: Season;
  events: EventData[];
  modifiers?: string[];
};

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
        <p className="event-box__time">{startTime}–{endTime}</p>
      </li>
    );
  });
};

export function EventBox(props: EventBoxProps): JSX.Element {
  return (
    <div className={`event-box${props.modifiers?.map(modifier => ` event-box--${modifier}`) ?? ''}`}>
      <h3 className="heading-tertiary">
        {props.season}
      </h3>
      <ul className="event-box__dates-list">
        {generateListItems(props.events)}
      </ul>
    </div>
  );
}

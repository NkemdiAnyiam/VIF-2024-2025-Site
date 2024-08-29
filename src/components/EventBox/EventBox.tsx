import React from 'react';
import { Day, getCentralTimeZone, getWeekdateOrdinal, Month, Time } from '../../utils/time';

type EventData = [day: Day, month: Month, weekDate: number, timeRange: [startTime: Time, endTime: Time]];

export type EventBoxProps = {
  heading: string;
  headingLink?: string;
  events: EventData[];
  modifiers?: string[];
};

const generateListItems = (events: EventData[]): JSX.Element[] => {
  return events.map(([day, month, weekDate, [startTime, endTime]]) => {
    return (
      <li key={`${month} ${weekDate}`} className="event-box__item">
        <p className="event-box__date">{day}, {month} {weekDate}<sup>{getWeekdateOrdinal(weekDate)}</sup></p>
        <p className="event-box__time">{startTime}–{endTime} {getCentralTimeZone(month, weekDate).short}</p>
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

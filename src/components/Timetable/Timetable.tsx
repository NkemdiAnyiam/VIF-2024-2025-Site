import React from 'react';

import { TimetableRow } from './TimetableRow/TimetableRow';

export function Timetable(): JSX.Element {
  return (
    <div className={`timetable`}>
      <TimetableRow />
      <TimetableRow />
      <TimetableRow />
    </div>
  );
}

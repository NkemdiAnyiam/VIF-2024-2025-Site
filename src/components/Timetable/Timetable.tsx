import React from 'react';

import { TimetableRow } from './TimetableRow/TimetableRow';

export function Timetable(): JSX.Element {
  return (
    <div className={`timetable`}>
      <TimetableRow
        isHeader
        cellData={[
          'Companies',
          '10:00',
          '10:30',
          '11:00',
          '11:30',
          '12:00',
          '12:30',
          '1:00',
          '1:30',
          '2:00',
          '2:30',
        ]}
      />
      {/* <TimetableRow
        cellData={[]}
      />
      <TimetableRow
        cellData={[]}
      /> */}
    </div>
  );
}

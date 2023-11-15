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
          '3:00',
          '3:30',
          '4:00',
        ]}
      />
      <TimetableRow
        cellData={[
          'Credera',
          'X',
          'X',
          'O',
          'X',
          'X',
          'O',
          'O',
          'O',
          'O',
          'X',
          'X',
          'X',
        ]}
      /><TimetableRow
      cellData={[
        'Disney',
        'O',
        'X',
        'O',
        'O',
        'X',
        'O',
        'O',
        'O',
        'O',
        'O',
        'O',
        'O',
      ]}
    />
    </div>
  );
}

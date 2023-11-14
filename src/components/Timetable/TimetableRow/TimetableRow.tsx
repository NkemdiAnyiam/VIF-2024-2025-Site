import React from 'react';

interface TimetableRowProps {
  isHeader?: boolean;
}

export function TimetableRow({isHeader}: TimetableRowProps): JSX.Element {
  return (
    <div className={`timetable__row${isHeader ? ' timetable__row--header' : ''}`}>
      <div className="cell cell--1">A</div>
      <div className="cell">B</div>
      <div className="cell">C</div>
      <div className="cell">D</div>
      <div className="cell">E</div>
      <div className="cell">E</div>
      <div className="cell">E</div>
      <div className="cell">E</div>
    </div>
  );
}

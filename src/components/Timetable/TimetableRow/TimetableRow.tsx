import React from 'react';

interface TimetableRowProps {
  isHeader?: boolean;
  cellData: string[];
}

const renderCells = (cellData: string[]): JSX.Element[] => {
  const row = cellData.map((str) => {
    return (
      <div className="cell"><span>{str}</span></div>
    );
  });

  row.splice(1, 0, <div className="cell cell--spacer"></div>);
  row.push(<div className="cell cell--spacer"></div>);

  return row;
}

export function TimetableRow({isHeader, cellData}: TimetableRowProps): JSX.Element {
  return (
    <div className={`timetable__row${isHeader ? ' timetable__row--header' : ''}`}>
      {renderCells(cellData)}
    </div>
  );
}

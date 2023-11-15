import React from 'react';

interface TimetableRowProps {
  isHeader?: boolean;
  cellData: string[];
}

const renderCells = (cellData: string[], isHeader?: boolean): JSX.Element[] => {
  let row: JSX.Element[];

  if (isHeader) {
    row = cellData.map((str) => {
      return (
        <div className={`cell`}><span>{str}</span></div>
      );
    });
  }
  else {
    row = [<div className={`cell`}><span>{cellData[0]}</span></div>];
    row = row.concat(
      cellData.slice(1).map((str) => {
        return (
          <div className={`cell ${str === 'X' ? 'cell--filled' : 'cell--empty'}`}></div>
        );
      })
    );
  }

  row.splice(1, 0, <div className="cell cell--spacer"></div>);
  row.push(<div className="cell cell--spacer"></div>);

  return row;
}

export function TimetableRow({isHeader, cellData}: TimetableRowProps): JSX.Element {
  return (
    <div className={`timetable__row${isHeader ? ' timetable__row--header' : ''}`}>
      {renderCells(cellData, isHeader)}
    </div>
  );
}

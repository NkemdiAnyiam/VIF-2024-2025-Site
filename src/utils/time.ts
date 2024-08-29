import { fairTimes } from "../data";

export type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
export type Month = 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December';
export type Time = `${number}${'am' | 'pm'}`;

type CDTTimezone = {
  short: 'CDT',
  offset: '-06:00'
};

type CSTTimezone = {
  short: 'CST',
  offset: '-05:00'
};

function monthToSemester(month: Month): 'Fall' | 'Spring' {
  return new Date(`${month} 1`).getMonth() >= 7 ? 'Fall' : 'Spring';
}

export function monthToYear(month: Month): string {
  // TODO: Might have to change this logic in the future.
  // Logic is that Fall semester = 2024 and spring semester = 2025
  switch(monthToSemester(month)) {
    case "Fall": return fairTimes.yearStart;
    case "Spring": return fairTimes.yearEnd;
  }
}

function getNthSunday(month: Month, year: string, nthSunday: number): number {
  let firstDayOfMonth = new Date(`${year} ${month} 1`);
  const daysToFirstSunday = (7 - firstDayOfMonth.getDay()) % 7;
  return firstDayOfMonth.getDate() + daysToFirstSunday + (7 * (nthSunday - 1));
}

export function getCentralTimeZone(month: Month, weekDate: number): CDTTimezone | CSTTimezone {
  const year = monthToYear(month);
  let marchDate = new Date(Number(year), 2, 1);
  marchDate.setDate(getNthSunday('March', year, 2));
  const novemberDate = new Date(Number(year), 10, 1);
  novemberDate.setDate(getNthSunday('November', year, 1));
  const eventDate = new Date(`${month} ${weekDate} ${year}`);

  return (eventDate >= marchDate && eventDate < novemberDate)
    ? {short: 'CDT', offset: '-06:00'}
    : {short: 'CST', offset: '-05:00'};
}

export function getWeekDatePostfix(weekDate: number) {
  switch(weekDate) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default:
      if (weekDate < 1 || !Number.isInteger(weekDate)) { throw new Error(`Invalid week date ${weekDate}`); }
      return 'th';
  }
};

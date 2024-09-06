// import { fairTimes } from "../data";

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

function getNthSunday(month: Month, year: `${number}` | number, nthSunday: number): number {
  let firstDayOfMonth = new Date(`${year} ${month} 1`);
  const daysToFirstSunday = (7 - firstDayOfMonth.getDay()) % 7;
  return firstDayOfMonth.getDate() + daysToFirstSunday + (7 * (nthSunday - 1));
}

export function getCentralTimeZone(month: Month, weekdate: number | `${number}`, year: number | `${number}`): CDTTimezone | CSTTimezone;
export function getCentralTimeZone(date: Date): CDTTimezone | CSTTimezone;
export function getCentralTimeZone(monthOrDate: Month | Date, maybeWeekdate?: number | `${number}`, maybeYear?: number | `${number}`): CDTTimezone | CSTTimezone {
  let month: Month;
  let year: number;
  let weekdate: number;

  if (monthOrDate instanceof Date) {
    month = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(monthOrDate) as Month;
    year = Number(new Intl.DateTimeFormat('en-US', {year: 'numeric'}).format(monthOrDate));
    weekdate = Number(new Intl.DateTimeFormat('en-US', {day: 'numeric'}).format(monthOrDate));
  }
  else {
    month = monthOrDate;
    year = Number(maybeYear!);
    weekdate = Number(maybeWeekdate!);
  }

  const marchDate = new Date(Number(year), 2, 1);
  marchDate.setDate(getNthSunday('March', year, 2));
  const novemberDate = new Date(Number(year), 10, 1);
  novemberDate.setDate(getNthSunday('November', year, 1));
  const eventDate = new Date(`${month} ${weekdate} ${year}`);

  return (eventDate >= marchDate && eventDate < novemberDate)
    ? {short: 'CDT', offset: '-06:00'}
    : {short: 'CST', offset: '-05:00'};
}

export function getWeekdateOrdinal(weekDate: number) {
  switch(weekDate % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default:
      if (weekDate < 1 || !Number.isInteger(weekDate)) { throw new Error(`Invalid week date ${weekDate}`); }
      return 'th';
  }
};

const toPadded = (val: `${number}` | number) => String(val).padStart(2, '0');

function toLongTime(time: string) {
  const potentiallyMinutes = time.match(/:\d+/);
  const minutes = potentiallyMinutes ? potentiallyMinutes[0].substring(1) : '00';
  const remainder = `${minutes}:00.000`;

  const hours = time.includes('pm')
    ? toPadded(Number(time.match(/\d+/)![0]) + 12)
    : toPadded(Number(time.match(/\d+/)![0]));

  return `${hours}:${remainder}`;
}

export function makeDate(data: {year: `${number}` | number, month: Month, weekdate: `${number}` | number, time?: Time}) {
  const {
    year, month, weekdate, time
  } = data;
  return new Date(`${year}-${toPadded(new Date(`${month} 1`).getMonth() + 1)}`
    + `-${toPadded(weekdate)}T${toLongTime(time ?? '1am')}${getCentralTimeZone(month, weekdate, year).offset}`);
}

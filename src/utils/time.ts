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

// function monthToSemester(month: Month): 'Fall' | 'Spring' {
//   return new Date(`${month} 1`).getMonth() >= 7 ? 'Fall' : 'Spring';
// }

// function monthToYear(month: Month): `${number}` | number {
//   // TODO: Might have to change this logic in the future.
//   // Logic is that Fall semester = 2024 and spring semester = 2025
//   switch(monthToSemester(month)) {
//     case "Fall": return fairTimes.yearStart;
//     case "Spring": return fairTimes.yearEnd;
//   }
// }

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

function makeDate(data: {year: `${number}` | number, month: Month, weekdate: `${number}` | number, time?: Time}) {
  const {
    year, month, weekdate, time
  } = data;
  return new Date(`${year}-${toPadded(new Date(`${month} 1`).getMonth() + 1)}`
    + `-${toPadded(weekdate)}T${toLongTime(time ?? '1am')}${getCentralTimeZone(month, weekdate, year).offset}`);
}

interface TimeEventProps {
  year: number | `${number}`;
  month: Month;
  weekdate: number;
  startTime: Time;
  endTime: Time;
}

export class TimeEvent {
  readonly year: number;
  readonly month: Month;
  readonly weekdate: number;
  readonly startTime: Time;
  readonly endTime: Time;

  get weekday(): Day { return new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(this.dateObj) as Day; }
  get weekdateOrdinal() { return getWeekdateOrdinal(this.weekdate); }
  get timeRange(): `${Time}–${Time}` {
    return `${this.startTime}–${this.endTime}`; // e.g.: '10am–4pm CST`
  }
  get timeZone(): 'CST' | 'CDT' { return getCentralTimeZone(this.dateObj).short; }
  get dateObj() { return makeDate({year: this.year, month: this.month, weekdate: this.weekdate}); }

  constructor({year, month, weekdate, startTime, endTime}: TimeEventProps) {
    this.year = Number(year);
    this.month = month;
    this.weekdate = weekdate;
    this.startTime = startTime;
    this.endTime = endTime;
  }

  private get startDate() { return makeDate({year: this.year, month: this.month, weekdate: this.weekdate, time: this.startTime}); }
  private get endDate() { return makeDate({year: this.year, month: this.month, weekdate: this.weekdate, time: this.endTime}); }
}

interface FairTimeEventProps extends TimeEventProps {
  studentLink: string;
  industryLink: string;
  location: string;
}

export class FairTimeEvent extends TimeEvent {
  readonly studentLink: string;
  readonly industryLink: string;
  readonly location: string;

  constructor(data: FairTimeEventProps) {
    super(data);
    this.studentLink = data.studentLink;
    this.industryLink = data.industryLink;
    this.location = data.location;
  }
}

// interface ProfWorkshopEventProps extends TimeEventProps {
//   link: string;
// }

// export class ProfWorkshopTimeEvent extends TimeEvent {
//   readonly link: string;

//   constructor(data: ProfWorkshopEventProps) {
//     super(data);
//     this.link = data.link;
//   }
// }

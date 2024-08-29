import { TimeEvent } from "../utils/time";

export const timePoints = [
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
];

export const timeRanges = timePoints.map((_, index, array) => `${array[index]} - ${array[index+1]}`).slice(0, -1);

export const virtualFair = new TimeEvent({
  year: 2025,
  month: 'February',
  weekdate: 20,
  startTime: '10am',
  endTime: '4pm',
});

export const inPersonFair = new TimeEvent({
  year: 2025,
  month: 'February',
  weekdate: 21,
  startTime: '10am',
  endTime: '4pm',
});

export const fairTimes = {
  yearStart: 2024,
  yearEnd: 2025,
  get yearEnDashRange() { return `${this.yearStart}–${String(this.yearEnd).substring(2)}`; },
};

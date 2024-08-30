import { TimeEvent } from "../utils/time";

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

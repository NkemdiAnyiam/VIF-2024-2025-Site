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

export const fairTimes = {
  yearStart: `2024`,
  yearEnd: `2025`,
  get yearEnDashRange() { return `${this.yearStart}–${this.yearEnd.substring(2)}`; },
  virtualFair: {
    date: `2025-02-20`,
    startTime: `10am`,
    endTime: `4pm`
  },
  inPersonFair: {
    date: `2025-02-21`,
    startTime: `10am`,
    endTime: `4pm`
  },
}

import { FairTimeEvent } from "../utils/time";

export const virtualFair = new FairTimeEvent({
  year: 2025,
  month: 'February',
  weekdate: 20,
  startTime: '10am',
  endTime: '4pm',
  studentLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc3fUZpRlQ6cb70fEC-5DQzMclIu9UIV3qOd-aIdMGwq3BjOw/viewform?usp=sf_link',
  industryLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc9py6MJjTf5IecnIta7BFZaSo7mm1YwfEFc5OYmSsYAkENeQ/viewform?usp=sf_link',
  location: 'Discord',
});

export const inPersonFair = new FairTimeEvent({
  year: 2025,
  month: 'February',
  weekdate: 21,
  startTime: '10am',
  endTime: '4pm',
  studentLink: 'https://docs.google.com/forms/d/e/1FAIpQLScSyjIGDruxEXK9J5VTcyX2cs0AtWVAkAZaIEWcIUjWwl4t4g/viewform?usp=sf_link',
  industryLink: 'https://docs.google.com/forms/d/e/1FAIpQLSc9py6MJjTf5IecnIta7BFZaSo7mm1YwfEFc5OYmSsYAkENeQ/viewform?usp=sf_link',
  location: 'the TAMU campus (Location To Be Determined)',
});

export const fairTimes = {
  yearStart: 2024,
  yearEnd: 2025,
  get yearEnDashRange() { return `${this.yearStart}–${String(this.yearEnd).substring(2)}`; },
};

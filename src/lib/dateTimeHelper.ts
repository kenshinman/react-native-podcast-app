export enum WeekDayEnum {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday',
}

export const getWeekDay = (date: Date): WeekDayEnum => {
  const day = date.getDay();
  switch (day) {
    case 0:
      return WeekDayEnum.Sunday;
    case 1:
      return WeekDayEnum.Monday;
    case 2:
      return WeekDayEnum.Tuesday;
    case 3:
      return WeekDayEnum.Wednesday;
    case 4:
      return WeekDayEnum.Thursday;
    case 5:
      return WeekDayEnum.Friday;
    case 6:
      return WeekDayEnum.Saturday;
    default:
      throw Error('Invalid date');
  }
};

export const humanDuration = (ducation: string): string => {
  const durationSplit = ducation.split(':');
  if (durationSplit.length === 2) {
    const [m] = durationSplit;
    return `${Number(m)}mins`;
  }
  const [h, m, s] = durationSplit;
  return `${Number(h) > 0 ? Number(h) + 'hrs' : ''}. ${Number(m)}mins`;
};

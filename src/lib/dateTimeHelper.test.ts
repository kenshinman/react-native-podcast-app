import {getWeekDay, humanDuration} from './dateTimeHelper';

describe('dateTimeHelper', () => {
  describe('#getWeekDay', () => {
    //given a date, I want to get human friendly date
    it('should return huan readable week dat', () => {
      const date = new Date('2021-01-22T23:55:14.501Z');
      expect(getWeekDay(date)).toBe('Saturday');
    });
  });

  describe('#humanDuration()', () => {
    it('should return human readable duration', () => {
      expect(humanDuration('03:13:00')).toBe('3hrs. 13mins');
      expect(humanDuration('13:04:00')).toBe('13hrs. 4mins');
      expect(humanDuration('01:18:00')).toBe('1hrs. 18mins');
      expect(humanDuration('18:00')).toBe('18mins');
    });
  });
});

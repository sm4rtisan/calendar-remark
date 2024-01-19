export enum HOLIDAY {
  NEW_YEARS_DAY = "New Year's Day",
  SPRING_FESTIVAL = 'Spring Festival',
  TOMB_SWEEPING_DAY = 'Tomb-sweeping Day',
  LABOUR_DAY = 'Labour Day',
  DRAGON_BOAT_FESTIVAL = 'Dragon Boat Festival',
  NATIONAL_DAY = 'National Day',
  MID_AUTUMN_FESTIVAL = 'Mid-autumn Festival',
}

export interface HolidayDetails {
  english: HOLIDAY;
  chinese: string;
  days: number;
}

export const holidayDetails: { [key in HOLIDAY]: HolidayDetails } = {
  [HOLIDAY.NEW_YEARS_DAY]: {
    english: HOLIDAY.NEW_YEARS_DAY,
    chinese: '元旦',
    days: 1,
  },
  [HOLIDAY.SPRING_FESTIVAL]: {
    english: HOLIDAY.SPRING_FESTIVAL,
    chinese: '春节',
    days: 3,
  },
  [HOLIDAY.TOMB_SWEEPING_DAY]: {
    english: HOLIDAY.TOMB_SWEEPING_DAY,
    chinese: '清明',
    days: 1,
  },
  [HOLIDAY.LABOUR_DAY]: {
    english: HOLIDAY.LABOUR_DAY,
    chinese: '劳动节',
    days: 1,
  },
  [HOLIDAY.DRAGON_BOAT_FESTIVAL]: {
    english: HOLIDAY.DRAGON_BOAT_FESTIVAL,
    chinese: '端午',
    days: 1,
  },
  [HOLIDAY.NATIONAL_DAY]: {
    english: HOLIDAY.NATIONAL_DAY,
    chinese: '国庆节',
    days: 3,
  },
  [HOLIDAY.MID_AUTUMN_FESTIVAL]: {
    english: HOLIDAY.MID_AUTUMN_FESTIVAL,
    chinese: '中秋',
    days: 1,
  },
};

export enum DAY_TYPE {
  HOLIDAY = 'holiday',
  REST_DAY = 'rest-day',
  WORKDAY = 'workday',
}

/**
 * 节日标记
 */
export const holidays = new Map([
  ['2024-01-01', HOLIDAY.NEW_YEARS_DAY],
  ['2024-02-10', HOLIDAY.SPRING_FESTIVAL],
  ['2024-04-04', HOLIDAY.TOMB_SWEEPING_DAY],
  ['2024-05-01', HOLIDAY.LABOUR_DAY],
  ['2024-06-10', HOLIDAY.DRAGON_BOAT_FESTIVAL],
  ['2024-09-17', HOLIDAY.MID_AUTUMN_FESTIVAL],
  ['2024-10-01', HOLIDAY.NATIONAL_DAY],
]);

/**
 * 休假标记
 */
export const restDays = new Map([
  ['2023-12-30', HOLIDAY.NEW_YEARS_DAY],
  ['2023-12-31', HOLIDAY.NEW_YEARS_DAY],
  ['2024-02-11', HOLIDAY.SPRING_FESTIVAL],
  ['2024-02-12', HOLIDAY.SPRING_FESTIVAL],
  ['2024-02-13', HOLIDAY.SPRING_FESTIVAL],
  ['2024-02-14', HOLIDAY.SPRING_FESTIVAL],
  ['2024-02-15', HOLIDAY.SPRING_FESTIVAL],
  ['2024-02-16', HOLIDAY.SPRING_FESTIVAL],
  ['2024-02-17', HOLIDAY.SPRING_FESTIVAL],
  ['2024-04-05', HOLIDAY.TOMB_SWEEPING_DAY],
  ['2024-04-06', HOLIDAY.TOMB_SWEEPING_DAY],
  ['2024-05-02', HOLIDAY.LABOUR_DAY],
  ['2024-05-03', HOLIDAY.LABOUR_DAY],
  ['2024-05-04', HOLIDAY.LABOUR_DAY],
  ['2024-05-05', HOLIDAY.LABOUR_DAY],
  ['2024-06-08', HOLIDAY.DRAGON_BOAT_FESTIVAL],
  ['2024-06-09', HOLIDAY.DRAGON_BOAT_FESTIVAL],
  ['2024-09-15', HOLIDAY.MID_AUTUMN_FESTIVAL],
  ['2024-09-16', HOLIDAY.MID_AUTUMN_FESTIVAL],
  ['2024-10-02', HOLIDAY.NATIONAL_DAY],
  ['2024-10-03', HOLIDAY.NATIONAL_DAY],
  ['2024-10-04', HOLIDAY.NATIONAL_DAY],
  ['2024-10-05', HOLIDAY.NATIONAL_DAY],
  ['2024-10-06', HOLIDAY.NATIONAL_DAY],
  ['2024-10-07', HOLIDAY.NATIONAL_DAY],
]);

/**
 * 工作日标记
 */
export const workdays = new Map([
  ['2024-02-04', HOLIDAY.SPRING_FESTIVAL],
  ['2024-02-18', HOLIDAY.SPRING_FESTIVAL],
  ['2024-04-07', HOLIDAY.TOMB_SWEEPING_DAY],
  ['2024-04-28', HOLIDAY.LABOUR_DAY],
  ['2024-05-11', HOLIDAY.LABOUR_DAY],
  ['2024-09-14', HOLIDAY.MID_AUTUMN_FESTIVAL],
  ['2024-09-29', HOLIDAY.NATIONAL_DAY],
  ['2024-10-12', HOLIDAY.NATIONAL_DAY],
]);

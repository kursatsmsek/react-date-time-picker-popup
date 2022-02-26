
/**
 *
 * @param {string} locale
 * @param {string} format
 * @returns Localized names of the days of the week ('Monday', 'Tuesday', 'Wednesday'...)
 */
export const getDayNames = (locale = 'en', format = 'long') => {
  const formatter = new Intl.DateTimeFormat(locale, { weekday: format, timeZone: 'UTC' });
  const days = [1, 2, 3, 4, 5, 6, 7].map(day => {
    const dd = day < 10 ? `0${day}` : day;
    return new Date(`2017-01-${dd}T00:00:00+00:00`);
  });
  var arr =  days.map(date => formatter.format(date));
  var element = arr[0];
  arr.splice(0, 1);
  arr.splice(arr.length, 0, element);
  return arr;
}

/**
 *
 * @param {number} num
 * @param {number} month
 * @param {number} year
 * @returns number of the day (0 - Sun, 1 - Mon, 2 - Tue, 3 - Wed, 4 - Thu, 5 -Fri, 6 - Sat)
 */
export const findDayOfWeek = (num, month, year) => {
  return new Date(year, month, num).getDay();
}

/**
 *
 * @param {number} month
 * @param {number} year
 * @returns returns the last day of the month (31, (28-29), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31)
 */
export const lastDayOfMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
}

/**
 *
 * @param {string} locale
 * @param {string} format
 * @returns Localized names of the months ('January', 'February', 'March'...)
 */
export const getMonthNames = (locale = 'en', format = 'long') => {
  const formatter = new Intl.DateTimeFormat(locale, { month: format, timeZone: 'UTC' });
  const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(month => {
    const mm = month < 10 ? `0${month}` : month;
    return new Date(`2017-${mm}-01T00:00:00+00:00`);
  });
  return months.map(date => formatter.format(date));
}
import * as constants from '../constants/values';

export const constructDateString = (day, month, year) =>
  day + ". " + constants.monthNamesGen[month - 1] + " " + year + ".";

export const constructDateStringForBackend = (day, month, year) => {
  const monthTemp = month < 10 ? "0"+month : month;
  const dayTemp = day < 10 ? "0"+day : day;
  return year + "-" + monthTemp + "-" + dayTemp;
}

export const createDateFromSnowClearingDate = (date) => {
  debugger;
  const month = date.clearingDate.monthValue === 1 ? 12 : date.clearingDate.monthValue - 1;
  const dateTemp = new Date(
    date.clearingDate.year,
    month,
    date.clearingDate.dayOfMonth
  );
  return dateTemp;
}

export const determinatePastDates = (date) => {
  const currentDate = new Date();
  const dateTemp = createDateFromSnowClearingDate(date);
  return dateTemp > currentDate;
};

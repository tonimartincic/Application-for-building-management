import * as constants from '../constants/values';

export const constructDateString = (day, month, year) =>
  year + '-' + month + '-' + day;

export const constructDateStringForBackend = (date) => {
  const monthTemp = date.clearingDate.split('-')[1];
  const dayTemp = date.clearingDate.split('-')[0];
  const yearTemp = date.clearingDate.split('-')[2];
  return yearTemp + "-" + monthTemp + "-" + dayTemp;
}

export const createDateFromSnowClearingDate = (date) => {
  const dateTemp = new Date(
    date.clearingDate.split('-')[2],
    date.clearingDate.split('-')[1] - 1,
    date.clearingDate.split('-')[0]
  );
  return dateTemp;
}

export const determinatePastDates = (date) => {
  const currentDate = new Date();
  const dateTemp = createDateFromSnowClearingDate(date);
  return dateTemp > currentDate;
};

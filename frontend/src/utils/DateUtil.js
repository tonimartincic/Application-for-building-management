import * as constants from '../constants/values';

export const constructDateString = (day, month, year) =>
  day + ". " + constants.monthNamesGen[month - 1] + " " + year + ".";

export const constructDateStringForBackend = (day, month, year) => {
  const monthTemp = month < 10 ? "0"+month : month;
  const dayTemp = day < 10 ? "0"+day : day;
  return year + "-" + monthTemp + "-" + dayTemp;
}

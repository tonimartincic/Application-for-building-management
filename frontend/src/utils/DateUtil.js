import * as constants from '../constants/values';

export const constructDateString = (day, month, year) =>
  day + ". " + constants.monthNamesGen[month - 1] + " " + year + ".";

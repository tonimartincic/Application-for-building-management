export const constructDateString = (day, month, year) =>
  year + '-' + month + '-' + day;

export const constructDateStringForBackend = (date) => {
  const monthTemp = date.clearingDate.split('-')[1];
  const dayTemp = date.clearingDate.split('-')[0];
  const yearTemp = date.clearingDate.split('-')[2];
  return yearTemp + "-" + monthTemp + "-" + dayTemp;
}

export const createDateFromSnowClearingDate = (date) => {
  if(date === null || date === undefined) {
    return null;
  }

  const dateTemp = new Date(
    date.clearingDate.split('-')[2],
    date.clearingDate.split('-')[1] - 1,
    date.clearingDate.split('-')[0]
  );

  return dateTemp;
}

export const createDateForDatePickerFromDateFromBackend = (date) => {
  if(date === null || date === undefined) {
    return null;
  }

  return `${date.substring(6, 10)}-${date.substring(3, 5)}-${date.substring(0, 2)}`;
}

export const determinatePastDates = (date) => {
  const currentDate = new Date();
  const dateTemp = createDateFromSnowClearingDate(date);
  return dateTemp > currentDate;
};

export const constructDateFromDatePickerForBackend = (dateFromDatePicker) => {
  if(dateFromDatePicker === null || dateFromDatePicker === undefined) {
    return null;
  }

  return `${dateFromDatePicker.substring(8, 10)}-${dateFromDatePicker.substring(5, 7)}-${dateFromDatePicker.substring(0, 4)}`;
}

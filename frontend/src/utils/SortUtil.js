export const sortAnnouncementsByCreationDate = (firstAnnouncement, secondAnnouncement) => {
  const firstDate = new Date(
    firstAnnouncement.creationDate.year,
    firstAnnouncement.creationDate.monthValue,
    firstAnnouncement.creationDate.dayOfMonth
  );

  const secondDate = new Date(
    secondAnnouncement.creationDate.year,
    secondAnnouncement.creationDate.monthValue,
    secondAnnouncement.creationDate.dayOfMonth
  );

  if(firstDate !== secondDate) {
    return firstDate < secondDate;
  }

  return firstAnnouncement.id < secondAnnouncement.id;
};

export const sortSnowClearingScheduleByDate = (firstSnowClearingDate, secondSnowClearingDate) => {
  debugger;
  const firstDate = new Date(
    firstSnowClearingDate.clearingDate.year,
    firstSnowClearingDate.clearingDate.monthValue,
    firstSnowClearingDate.clearingDate.dayOfMonth
  );

  const secondDate = new Date(
    secondSnowClearingDate.clearingDate.year,
    secondSnowClearingDate.clearingDate.monthValue,
    secondSnowClearingDate.clearingDate.dayOfMonth,
  );
  return secondDate>firstDate? -1 : secondDate<firstDate ? 1 : 0;
};

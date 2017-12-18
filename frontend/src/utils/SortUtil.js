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

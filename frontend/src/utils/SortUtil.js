export const sortAnnouncementsByCreationDate = (firstAnnouncement, secondAnnouncement) => {
  if(firstAnnouncement.creationDate.year !== secondAnnouncement.creationDate.year) {
    return firstAnnouncement.creationDate.year < secondAnnouncement.creationDate.year;
  }

  if(firstAnnouncement.creationDate.monthValue !== secondAnnouncement.creationDate.monthValue) {
    return firstAnnouncement.creationDate.monthValue < secondAnnouncement.creationDate.monthValue;
  }

  return firstAnnouncement.creationDate.dayOfMonth < secondAnnouncement.creationDate.dayOfMonth;
};

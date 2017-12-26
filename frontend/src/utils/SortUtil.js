export const sortAnnouncementsByCreationDate = (firstAnnouncement, secondAnnouncement) => {
  debugger;
  const firstDate = new Date(
    firstAnnouncement.creationDate.split('-')[2],
    firstAnnouncement.creationDate.split('-')[1] - 1,
    firstAnnouncement.creationDate.split('-')[0]
  );

  const secondDate = new Date(
    secondAnnouncement.creationDate.split('-')[2],
    secondAnnouncement.creationDate.split('-')[1] - 1,
    secondAnnouncement.creationDate.split('-')[0]
  );

  if(firstDate !== secondDate) {
    return firstDate < secondDate ? 1 : -1;
  }

  return firstAnnouncement.id < secondAnnouncement.id;
};

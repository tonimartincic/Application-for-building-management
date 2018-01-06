package hr.fer.opp.eureka.schedule;

import hr.fer.opp.eureka.service.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class ExpiredAnnouncementsScheduler {

  private static final Integer NUM_OF_MILIS_IN_ONE_DAY = 86400000;

  private final AnnouncementService announcementService;

  @Autowired
  public ExpiredAnnouncementsScheduler(final AnnouncementService announcementService) {
    this.announcementService = announcementService;
  }

  @Scheduled(fixedDelay = NUM_OF_MILIS_IN_ONE_DAY)
  public void syncAnnouncements() {
    this.announcementService.deleteExpiredAnnouncements();
  }
}

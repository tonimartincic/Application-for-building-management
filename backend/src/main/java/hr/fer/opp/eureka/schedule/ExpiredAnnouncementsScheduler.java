package hr.fer.opp.eureka.schedule;

import hr.fer.opp.eureka.service.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class ExpiredAnnouncementsScheduler {

  private final AnnouncementService announcementService;

  @Autowired
  public ExpiredAnnouncementsScheduler(final AnnouncementService announcementService) {
    this.announcementService = announcementService;
  }

  @Scheduled(fixedDelay = 86400000)
  public void syncAnnouncements() {
    this.announcementService.deleteExpiredAnnouncements();
  }
}

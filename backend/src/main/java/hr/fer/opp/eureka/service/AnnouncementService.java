package hr.fer.opp.eureka.service;

import hr.fer.opp.eureka.domain.announcement.Announcement;
import hr.fer.opp.eureka.domain.announcement.AnnouncementRequest;

import java.util.List;

public interface AnnouncementService {

  List<Announcement> getAll();

  Announcement getById(Long id);

  Announcement add(AnnouncementRequest announcementRequest);

  Announcement edit(Announcement announcement);

  void deleteById(Long id);

  void deleteExpiredAnnouncements();
}

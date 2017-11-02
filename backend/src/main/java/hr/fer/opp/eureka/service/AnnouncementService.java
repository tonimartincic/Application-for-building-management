package hr.fer.opp.eureka.service;

import hr.fer.opp.eureka.domain.Announcement;

import java.util.List;

public interface AnnouncementService {

  List<Announcement> getAll();

  Announcement getById(Long id);

  Announcement add(Announcement announcement);

  void deleteById(Long id);
}

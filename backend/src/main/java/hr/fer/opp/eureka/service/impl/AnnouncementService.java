package hr.fer.opp.eureka.service.impl;

import java.util.List;

import hr.fer.opp.eureka.domain.Announcement;

public interface AnnouncementService {

  List<Announcement> getAll();

  Announcement getUserById(Long id);

}

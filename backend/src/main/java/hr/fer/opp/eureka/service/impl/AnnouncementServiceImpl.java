package hr.fer.opp.eureka.service.impl;

import com.google.common.collect.Lists;
import hr.fer.opp.eureka.domain.announcement.Announcement;
import hr.fer.opp.eureka.domain.announcement.AnnouncementRequest;
import hr.fer.opp.eureka.domain.apartment.Apartment;
import hr.fer.opp.eureka.domain.building.Building;
import hr.fer.opp.eureka.repository.AnnouncementRepository;
import hr.fer.opp.eureka.repository.UserRepository;
import hr.fer.opp.eureka.service.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class AnnouncementServiceImpl implements AnnouncementService {

  private final AnnouncementRepository announcementRepository;

  private final UserRepository userRepository;

  @Autowired
  public AnnouncementServiceImpl(
    AnnouncementRepository announcementRepository,
    UserRepository userRepository) {

    this.announcementRepository = announcementRepository;
    this.userRepository = userRepository;
  }

  @Override
  public List<Announcement> getAllForCurrentUser(Long currentUserId) {
    Building currentUserBuilding = ((Apartment) this.userRepository.findById(currentUserId).getApartments().toArray()[0]).getBuilding();

    List<Announcement> allAnnouncements = Lists.newArrayList(announcementRepository.findAll());
    List<Announcement> allAnnouncementsForBuilding = new ArrayList<>();

    for (Announcement announcement : allAnnouncements) {
      if (((Apartment) announcement.getUser().getApartments().toArray()[0]).getBuilding().getId() == currentUserBuilding.getId()) {
        allAnnouncementsForBuilding.add(announcement);
      }
    }

    return allAnnouncementsForBuilding;
  }

  @Override
  public Announcement getById(Long id) {
    return announcementRepository.findById(id);
  }

  @Override
  public Announcement add(AnnouncementRequest announcementRequest) {
    Announcement announcement = new Announcement();

    announcement.setCreationDate(LocalDate.now());
    announcement.setExpirationDate(announcementRequest.getExpirationDate());
    announcement.setContent(announcementRequest.getContent());
    announcement.setUser(this.userRepository.findById(announcementRequest.getUserId()));

    return this.announcementRepository.save(announcement);
  }

  @Override
  public Announcement edit(Announcement announcement) {
    Announcement announcementFromDatabase = this.announcementRepository.findById(announcement.getId());
    announcementFromDatabase.setContent(announcement.getContent());

    return this.announcementRepository.save(announcementFromDatabase);
  }

  @Override
  public void deleteById(Long id) {
    this.announcementRepository.delete(id);
  }

  @Override
  public void deleteExpiredAnnouncements() {
    List<Announcement> allAnnouncements = Lists.newArrayList(this.announcementRepository.findAll());

    for (Announcement announcement : allAnnouncements) {
      if (announcement.getExpirationDate() == null) {
        continue;
      }

      if (announcement.getExpirationDate().isAfter(LocalDate.now())) {
        continue;
      }

      this.announcementRepository.delete(announcement.getId());
    }
  }
}

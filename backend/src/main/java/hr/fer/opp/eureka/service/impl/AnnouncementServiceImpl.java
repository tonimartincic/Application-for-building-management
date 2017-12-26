package hr.fer.opp.eureka.service.impl;

import com.google.common.collect.Lists;
import hr.fer.opp.eureka.domain.announcement.Announcement;
import hr.fer.opp.eureka.domain.announcement.AnnouncementCreateRequest;
import hr.fer.opp.eureka.repository.AnnouncementRepository;
import hr.fer.opp.eureka.repository.UserRepository;
import hr.fer.opp.eureka.service.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class AnnouncementServiceImpl implements AnnouncementService {

  private final AnnouncementRepository announcementRepository;

  private final UserRepository userRepository;

  @Autowired
  public AnnouncementServiceImpl(
    AnnouncementRepository announcementRepository,
    UserRepository userRepository){

    this.announcementRepository = announcementRepository;
    this.userRepository = userRepository;
  }

  @Override
  public List<Announcement> getAll() {
   return Lists.newArrayList(announcementRepository.findAll());
  }

  @Override
  public Announcement getById(Long id) {
    return announcementRepository.findById(id);
  }

  @Override
  public Announcement add(AnnouncementCreateRequest announcementCreateRequest) {
    Announcement announcement = new Announcement();

    announcement.setCreationDate(LocalDate.now());
    announcement.setExpirationDate(announcementCreateRequest.getExpirationDate());
    announcement.setContent(announcementCreateRequest.getContent());
    announcement.setUser(this.userRepository.findById(announcementCreateRequest.getUserId()));

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
}

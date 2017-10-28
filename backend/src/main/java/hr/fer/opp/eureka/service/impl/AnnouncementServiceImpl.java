package hr.fer.opp.eureka.service.impl;

import com.google.common.collect.Lists;
import hr.fer.opp.eureka.domain.Announcement;
import hr.fer.opp.eureka.repository.AnnouncementRepository;
import hr.fer.opp.eureka.service.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnnouncementServiceImpl implements AnnouncementService {

  private final AnnouncementRepository announcementRepository;

  @Autowired
  public AnnouncementServiceImpl(AnnouncementRepository announcementRepository){
    this.announcementRepository=announcementRepository;
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
  public Announcement add(Announcement announcement) {
    return this.announcementRepository.save(announcement);
  }

}

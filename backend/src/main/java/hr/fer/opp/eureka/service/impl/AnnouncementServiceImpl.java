package hr.fer.opp.eureka.service.impl;

import hr.fer.opp.eureka.domain.Announcement;
import hr.fer.opp.eureka.repository.AnnouncementRepository;
import hr.fer.opp.eureka.service.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
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
    List<Announcement> temp = new ArrayList<>();
    Iterable<Announcement> allPaymentOrders = announcementRepository.findAll();
    for(Announcement oth : allPaymentOrders) {
      temp.add(oth);
    }
    return temp;
  }

  @Override
  public Announcement getUserById(Long id) {
    return announcementRepository.findById(id);
  }
}

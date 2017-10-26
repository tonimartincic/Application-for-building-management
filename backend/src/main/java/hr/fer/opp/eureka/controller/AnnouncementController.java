package hr.fer.opp.eureka.controller;

import hr.fer.opp.eureka.domain.Announcement;
import hr.fer.opp.eureka.service.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AnnouncementController {

  private final AnnouncementService announcementService;

  @Autowired
  public AnnouncementController(AnnouncementService announcementService){
    this.announcementService=announcementService;
  }

  @GetMapping("/api/announcements")
  public List<Announcement> getAllAnnouncements(){
    return announcementService.getAll();
  }

  @GetMapping("api/announcements/{id}")
  public Announcement getAnnouncementById(@PathVariable final Long id){
    return this.announcementService.getUserById(id);
  }

}

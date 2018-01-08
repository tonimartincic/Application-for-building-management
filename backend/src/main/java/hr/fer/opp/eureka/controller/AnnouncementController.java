package hr.fer.opp.eureka.controller;

import hr.fer.opp.eureka.domain.announcement.Announcement;
import hr.fer.opp.eureka.domain.announcement.AnnouncementRequest;
import hr.fer.opp.eureka.service.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AnnouncementController {

  private final AnnouncementService announcementService;

  @Autowired
  public AnnouncementController(AnnouncementService announcementService){
    this.announcementService = announcementService;
  }

  @GetMapping("/api/announcements/current-user/{currentUserId}")
  public List<Announcement> getAllAnnouncementsForCurrentUser(@PathVariable Long currentUserId){
    return announcementService.getAllForCurrentUser(currentUserId);
  }

  @GetMapping("api/announcements/{id}")
  public Announcement getAnnouncementById(@PathVariable Long id){
    return announcementService.getById(id);
  }

  @PostMapping("/api/announcements")
  public Announcement addNewAnnouncement(@RequestBody final AnnouncementRequest announcementRequest) {
    return announcementService.add(announcementRequest);
  }

  @PostMapping("/api/announcements/edit")
  public Announcement editAnnouncement(@RequestBody final Announcement announcement) {
    return announcementService.edit(announcement);
  }

  @DeleteMapping("api/announcements/{id}")
  public void deleteAnnouncementById(@PathVariable Long id){
    announcementService.deleteById(id);
  }
}

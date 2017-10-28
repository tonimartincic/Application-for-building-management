package hr.fer.opp.eureka.controller;

import hr.fer.opp.eureka.domain.UserNotification;
import hr.fer.opp.eureka.service.UserNotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserNotificationController {

  private final UserNotificationService userNotificationService;

  @Autowired
  public UserNotificationController(UserNotificationService userNotificationService) {
    this.userNotificationService = userNotificationService;
  }

  @GetMapping ("/api/user-notifications")
  public List<UserNotification> getAllNotifications() {
    return userNotificationService.getAll();
  }

  @GetMapping ("/api/user-notifications/{id}")
  public List<UserNotification> getAllNotificationsForUser (@PathVariable Long id) {
    return userNotificationService.getAllNotificationsForCurrentUser(id);
  }
}

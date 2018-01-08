package hr.fer.opp.eureka.controller;

import hr.fer.opp.eureka.domain.userNotification.UserNotification;
import hr.fer.opp.eureka.service.UserNotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

  @PostMapping("/api/user-notifications")
  public UserNotification addNewUserNotification(@RequestBody final UserNotification userNotification) {
    return userNotificationService.add(userNotification);
  }

  @PutMapping("/api/user-notifications-read/{id}")
  public List<UserNotification> readNotificationsForUser(@PathVariable Long id) {
    return userNotificationService.readNotificationsForUser(id);
  }
}

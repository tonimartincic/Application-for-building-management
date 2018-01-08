package hr.fer.opp.eureka.service;

import hr.fer.opp.eureka.domain.userNotification.UserNotification;

import java.util.List;

public interface UserNotificationService {

  List<UserNotification> getAllNotificationsForCurrentUser(Long userId);

  List<UserNotification> getAll();

  UserNotification add(UserNotification userNotification);

  List<UserNotification> readNotificationsForUser(Long id);
}

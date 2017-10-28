package hr.fer.opp.eureka.service;

import hr.fer.opp.eureka.domain.UserNotification;

import java.util.List;

public interface UserNotificationService {

  List<UserNotification> getAllNotificationsForCurrentUser(String userId);

  List<UserNotification> getAll();

}

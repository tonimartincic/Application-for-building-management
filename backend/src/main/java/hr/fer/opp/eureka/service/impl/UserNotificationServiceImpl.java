package hr.fer.opp.eureka.service.impl;

import hr.fer.opp.eureka.domain.UserNotification;
import hr.fer.opp.eureka.repository.UserNotificationRepository;
import hr.fer.opp.eureka.service.UserNotificationService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserNotificationServiceImpl implements UserNotificationService {

  UserNotificationRepository userNotificationRepository;

  @Override
  public List<UserNotification> getAllNotificationsForCurrentUser(String userId) {
    return userNotificationRepository.findById(userId);
  }

  @Override
  public List<UserNotification> getAll() {
    List<UserNotification> temp = new ArrayList<>();
    Iterable<UserNotification> allNotifications = userNotificationRepository.findAll();

    for ( UserNotification oth : allNotifications ) {
      temp.add(oth);
    }

    return temp;
  }
}

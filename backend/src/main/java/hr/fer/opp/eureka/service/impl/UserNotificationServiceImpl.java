package hr.fer.opp.eureka.service.impl;

import com.google.common.collect.Lists;
import hr.fer.opp.eureka.domain.user.User;
import hr.fer.opp.eureka.domain.UserNotification;
import hr.fer.opp.eureka.repository.UserNotificationRepository;
import hr.fer.opp.eureka.repository.UserRepository;
import hr.fer.opp.eureka.service.UserNotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserNotificationServiceImpl implements UserNotificationService {

  private final UserNotificationRepository userNotificationRepository;

  private final UserRepository userRepository;

  @Autowired
  public UserNotificationServiceImpl(UserNotificationRepository userNotificationRepository, UserRepository userRepository) {
    this.userNotificationRepository = userNotificationRepository;
    this.userRepository = userRepository;
  }

  @Override
  public List<UserNotification> getAll() {
    return Lists.newArrayList(userNotificationRepository.findAll());
  }

  @Override
  public List<UserNotification> getAllNotificationsForCurrentUser(Long userId) {
    User user = userRepository.findById(userId);
    return userNotificationRepository.findByUser(user);
  }

  @Override
  public UserNotification add(UserNotification userNotification) {
    return this.userNotificationRepository.save(userNotification);
  }
}

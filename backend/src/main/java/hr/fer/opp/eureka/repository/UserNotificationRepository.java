package hr.fer.opp.eureka.repository;

import hr.fer.opp.eureka.domain.user.User;
import hr.fer.opp.eureka.domain.userNotification.UserNotification;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserNotificationRepository extends CrudRepository<UserNotification, Long> {

  UserNotification findById(Long id);

  List<UserNotification> findByUser(User user);
}

package hr.fer.opp.eureka.service.impl;

import com.google.common.collect.Lists;
import hr.fer.opp.eureka.domain.apartment.Apartment;
import hr.fer.opp.eureka.domain.building.Building;
import hr.fer.opp.eureka.domain.paymentOrder.PaymentOrder;
import hr.fer.opp.eureka.domain.snowClearingDate.SnowClearingDate;
import hr.fer.opp.eureka.domain.user.User;
import hr.fer.opp.eureka.domain.userNotification.UserNotification;
import hr.fer.opp.eureka.repository.PaymentOrderRepository;
import hr.fer.opp.eureka.repository.SnowClearingDateRepository;
import hr.fer.opp.eureka.repository.UserNotificationRepository;
import hr.fer.opp.eureka.repository.UserRepository;
import hr.fer.opp.eureka.service.UserNotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserNotificationServiceImpl implements UserNotificationService {

  private final UserNotificationRepository userNotificationRepository;
  private final PaymentOrderRepository paymentOrderRepository;
  private final UserRepository userRepository;
  private final SnowClearingDateRepository snowClearingDateRepository;

  @Autowired
  public UserNotificationServiceImpl(UserNotificationRepository userNotificationRepository, UserRepository userRepository,
                                     SnowClearingDateRepository snowClearingDateRepository,PaymentOrderRepository paymentOrderRepository) {
    this.userNotificationRepository = userNotificationRepository;
    this.userRepository = userRepository;
    this.snowClearingDateRepository = snowClearingDateRepository;
    this.paymentOrderRepository = paymentOrderRepository;
  }

  @Override
  public List<UserNotification> getAll() {
    return Lists.newArrayList(userNotificationRepository.findAll());
  }

  @Override
  public List<UserNotification> getAllNotificationsForCurrentUser(Long userId) {
    User user = userRepository.findById(userId);
    List<SnowClearingDate> allSnowClearingDates= Lists.newArrayList(snowClearingDateRepository.findAll());
    List<PaymentOrder> allPaymentOrders = Lists.newArrayList(paymentOrderRepository.findAll());
    List<UserNotification> currentUserNotifications = userNotificationRepository.findByUser(user);
    for(SnowClearingDate snowClearingDate : allSnowClearingDates) {
      if(user.getReminder()==true) {
        if (snowClearingDate.getUser().getId() == userId) {
          if (snowClearingDate.getClearingDate().equals(LocalDate.now().plusDays(1))) {
            UserNotification tomorrowSnowClearingNotification = new UserNotification();
            tomorrowSnowClearingNotification.setDescription("Sutra ste na rasporedu za čišćenje snijega");
            tomorrowSnowClearingNotification.setUser(user);
            tomorrowSnowClearingNotification.setRead(false);
            tomorrowSnowClearingNotification.setCreationDate(LocalDate.now());

            boolean alreadyExists=false;
            for (UserNotification userNotification:currentUserNotifications) {
              if(userNotification.getCreationDate().equals(LocalDate.now())
                && userNotification.getDescription().equals("Sutra ste na rasporedu za čišćenje snijega"))  {
                alreadyExists=true;
              }
            }
            if(!alreadyExists){
              userNotificationRepository.save(tomorrowSnowClearingNotification);
            }
          }
          if (snowClearingDate.getClearingDate().equals(LocalDate.now())) {
            UserNotification todaySnowClearingNotification = new UserNotification();
            todaySnowClearingNotification.setDescription("Danas ste na rasporedu za čišćenje snijega");
            todaySnowClearingNotification.setUser(user);
            todaySnowClearingNotification.setRead(false);
            todaySnowClearingNotification.setCreationDate(LocalDate.now());

            boolean alreadyExists=false;
            for (UserNotification userNotification:currentUserNotifications) {
              if(userNotification.getCreationDate().equals(LocalDate.now())
                && userNotification.getDescription().equals("Danas ste na rasporedu za čišćenje snijega"))  {
                alreadyExists=true;
              }
            }
            if(!alreadyExists){
              userNotificationRepository.save(todaySnowClearingNotification);
            }
          }
        }
      }
    }

    for(PaymentOrder paymentOrder : allPaymentOrders) {
      if(user.getReminder()==true) {
        if (paymentOrder.getPayer().getId() == userId) {
          if (paymentOrder.getPaymentDue().equals(LocalDate.now().plusDays(1))) {
            UserNotification tomorrowPaymentOrderDueNotification = new UserNotification();
            tomorrowPaymentOrderDueNotification.setDescription("Sutra je zadnji dan za plaćanje naloga!");
            tomorrowPaymentOrderDueNotification.setUser(user);
            tomorrowPaymentOrderDueNotification.setRead(false);
            tomorrowPaymentOrderDueNotification.setCreationDate(LocalDate.now());

            boolean alreadyExists=false;
            for (UserNotification userNotification:currentUserNotifications) {
              if(userNotification.getCreationDate().equals(LocalDate.now())
                && userNotification.getDescription().equals("Sutra je zadnji dan za plaćanje naloga!"))  {
                alreadyExists=true;
              }
            }
            if(!alreadyExists){
              userNotificationRepository.save(tomorrowPaymentOrderDueNotification);
            }

          }
          if (paymentOrder.getPaymentDue().equals(LocalDate.now())) {
            UserNotification todayPaymentOrderDueNotification = new UserNotification();
            todayPaymentOrderDueNotification.setDescription("Danas je zadnji dan za plaćanje naloga!");
            todayPaymentOrderDueNotification.setUser(user);
            todayPaymentOrderDueNotification.setRead(false);
            todayPaymentOrderDueNotification.setCreationDate(LocalDate.now());

            boolean alreadyExists=false;
            for (UserNotification userNotification:currentUserNotifications) {
              if(userNotification.getCreationDate().equals(LocalDate.now())
                && userNotification.getDescription().equals("Danas je zadnji dan za plaćanje naloga!"))  {
                alreadyExists=true;
              }
            }
            if(!alreadyExists){
              userNotificationRepository.save(todayPaymentOrderDueNotification);
            }
          }
        }
      }
    }

    return userNotificationRepository.findByUser(user);
  }

  @Override
  public UserNotification add(UserNotification userNotification) {
    return this.userNotificationRepository.save(userNotification);
  }

  @Override
  public List<UserNotification> readNotificationsForUser(Long userId) {
    User user = userRepository.findById(userId);
    List<UserNotification> notificationsFromDatabase = this.userNotificationRepository.findByUser(user);
    for (UserNotification notification:notificationsFromDatabase) {
      notification.setRead(true);
      this.userNotificationRepository.save(notification);
    }
    return notificationsFromDatabase;

  }
}

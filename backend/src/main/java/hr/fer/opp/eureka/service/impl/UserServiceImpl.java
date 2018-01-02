package hr.fer.opp.eureka.service.impl;

import com.google.common.collect.Lists;
import hr.fer.opp.eureka.domain.Apartment;
import hr.fer.opp.eureka.domain.Building;
import hr.fer.opp.eureka.domain.cost.Cost;
import hr.fer.opp.eureka.domain.cost.CostResponse;
import hr.fer.opp.eureka.domain.user.User;
import hr.fer.opp.eureka.domain.user.UserRequest;
import hr.fer.opp.eureka.domain.user.UserResponse;
import hr.fer.opp.eureka.enumeration.UserPrivilege;
import hr.fer.opp.eureka.repository.*;
import hr.fer.opp.eureka.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.GeneratedValue;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService {

  private final UserRepository userRepository;

  private final ApartmentRepository apartmentRepository;

  private final BuildingRepository buildingRepository;

  private final AnnouncementRepository announcementRepository;

  private final CostRepository costRepository;

  private final PaymentOrderRepository paymentOrderRepository;

  private final UserNotificationRepository userNotificationRepository;

  private final SnowClearingDateRepository snowClearingDateRepository;

  @Autowired
  public UserServiceImpl(
    UserRepository userRepository,
    ApartmentRepository apartmentRepository,
    BuildingRepository buildingRepository,
    AnnouncementRepository announcementRepository,
    CostRepository costRepository,
    PaymentOrderRepository paymentOrderRepository,
    UserNotificationRepository userNotificationRepository,
    SnowClearingDateRepository snowClearingDateRepository) {

    this.userRepository = userRepository;
    this.apartmentRepository = apartmentRepository;
    this.buildingRepository = buildingRepository;
    this.announcementRepository = announcementRepository;
    this.costRepository = costRepository;
    this.paymentOrderRepository = paymentOrderRepository;
    this.userNotificationRepository = userNotificationRepository;
    this.snowClearingDateRepository = snowClearingDateRepository;
  }

  @Override
  public List<UserResponse> getAll() {
    return getUserResponses(Lists.newArrayList(userRepository.findAll()));
  }

  @Override
  public UserResponse getById(Long id) {
    return getUserResponse(userRepository.findById(id));
  }

  @Override
  public UserResponse validateUser(String mail, String password) {
    return getUserResponse(userRepository.findByMailAndPassword(mail, password));
  }

  @Override
  public UserResponse add(UserRequest userRequest, Long apartmentId) {
    Apartment apartment = apartmentRepository.findById(apartmentId);

    User user = new User(userRequest);

    Set<Apartment> apartmentSet = new HashSet<>();
    apartmentSet.add(apartment);

    apartment.setOwner(user);
    user.setApartments(apartmentSet);

    return getUserResponse(this.userRepository.save(user));
  }

  @Override
  public UserResponse getByMail(String mail) {
    return getUserResponse(this.userRepository.findByMail(mail));
  }

  @Override
  public UserResponse edit(UserRequest userRequest) {
    User userFromDatabase = this.userRepository.findById(userRequest.getId());

    userFromDatabase.setFirstName(userRequest.getFirstName());
    userFromDatabase.setLastName(userRequest.getLastName());
    userFromDatabase.setMail(userRequest.getMail());
    userFromDatabase.setPrivilege(UserPrivilege.getByName(userRequest.getPrivilege()));

    return getUserResponse(this.userRepository.save(userFromDatabase));
  }

  @Override
  public void deleteById(Long id) {
    User user = this.userRepository.findById(id);
    setForeignKeyValuesToNull(user);

    this.userRepository.delete(id);
  }

  private void setForeignKeyValuesToNull(User user) {
    user.getApartments().forEach(apartment -> {
      apartment.setOwner(null);
      this.apartmentRepository.save(apartment);
    });

    user.getManagerBuildingSet().forEach(building -> {
      building.setManager(null);
      this.buildingRepository.save(building);
    });

    user.getLandlordBuildingSet().forEach(building -> {
      building.setLandlord(null);
      this.buildingRepository.save(building);
    });

    this.announcementRepository.delete(user.getAnnouncementSet());
    this.costRepository.delete(user.getCosts());
    this.userNotificationRepository.delete(user.getUserNotificationList());
    this.paymentOrderRepository.delete(user.getPaymentOrdersToPay());
    this.paymentOrderRepository.delete(user.getPaymentOrdersToReceive());
    this.snowClearingDateRepository.delete(user.getSnowClearingDates());
  }

  private List<UserResponse> getUserResponses(List<User> users) {
    List<UserResponse> userResponses = new ArrayList<>();

    for(User user : users) {
      userResponses.add(getUserResponse(user));
    }

    return userResponses;
  }

  private UserResponse getUserResponse(User user) {
    return new UserResponse(user);
  }

  private User getUser(UserRequest userRequest) {
    return new User(userRequest);
  }
}

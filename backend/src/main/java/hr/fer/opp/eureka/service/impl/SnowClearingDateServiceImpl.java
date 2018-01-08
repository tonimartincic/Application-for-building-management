package hr.fer.opp.eureka.service.impl;

import com.google.common.collect.Lists;
import hr.fer.opp.eureka.domain.apartment.Apartment;
import hr.fer.opp.eureka.domain.building.Building;
import hr.fer.opp.eureka.domain.snowClearingDate.SnowClearingDate;
import hr.fer.opp.eureka.domain.user.User;
import hr.fer.opp.eureka.repository.SnowClearingDateRepository;
import hr.fer.opp.eureka.repository.UserRepository;
import hr.fer.opp.eureka.service.SnowClearingDateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class SnowClearingDateServiceImpl implements SnowClearingDateService {

  private final SnowClearingDateRepository snowClearingDateRepository;

  private final UserRepository userRepository;

  @Autowired
  public SnowClearingDateServiceImpl(SnowClearingDateRepository snowClearingDateRepository, UserRepository userRepository) {
    this.snowClearingDateRepository = snowClearingDateRepository;
    this.userRepository = userRepository;
  }

  @Override
  public List<SnowClearingDate> getAllForCurrentBuilding(Long currentUserId) {
    Building currentUserBuilding = ((Apartment) this.userRepository.findById(currentUserId).getApartments().toArray()[0]).getBuilding();

    List<SnowClearingDate> allSnowClearingDates = Lists.newArrayList(snowClearingDateRepository.findAll());
    List<SnowClearingDate> snowClearingDatesForCurrentGroup = new ArrayList<>();

    for(SnowClearingDate snowClearingDate : allSnowClearingDates) {
      if(((Apartment) snowClearingDate.getUser().getApartments().toArray()[0]).getBuilding().getId() == currentUserBuilding.getId()) {
        snowClearingDatesForCurrentGroup.add(snowClearingDate);
      }
    }

    return snowClearingDatesForCurrentGroup;
  }

  @Override
  public SnowClearingDate add(SnowClearingDate snowClearingDate) {
    return this.snowClearingDateRepository.save(snowClearingDate);
  }

  @Override
  public SnowClearingDate askChangeForCurrentBuilding(LocalDate clearingDate, Long currentUserId) {
    Building currentUserBuilding = ((Apartment) this.userRepository.findById(currentUserId).getApartments().toArray()[0]).getBuilding();

    SnowClearingDate snowClearingDateForCurrentGroup = getSnowClearingDateForCurrentGroup(clearingDate, currentUserBuilding);

    if(snowClearingDateForCurrentGroup != null) {
      snowClearingDateForCurrentGroup.setAskChange(true);
      return snowClearingDateRepository.save(snowClearingDateForCurrentGroup);
    }

    return null;
  }

  @Override
  public List<SnowClearingDate> approveChangesForCurrentBuilding(LocalDate firstDate, LocalDate secondDate, Long currentUserId) {
    Building currentUserBuilding = ((Apartment) this.userRepository.findById(currentUserId).getApartments().toArray()[0]).getBuilding();

    SnowClearingDate firstSnowClearingDateForCurrentBuilding = getSnowClearingDateForCurrentGroup(firstDate, currentUserBuilding);
    SnowClearingDate secondSnowClearingDateForCurrentBuilding = getSnowClearingDateForCurrentGroup(secondDate, currentUserBuilding);

    SnowClearingDate snowClearingDateTempFirst = new SnowClearingDate(secondDate, firstSnowClearingDateForCurrentBuilding.getUser(), false);
    SnowClearingDate snowClearingDateTempSecond = new SnowClearingDate(firstDate, secondSnowClearingDateForCurrentBuilding.getUser(), false);

    snowClearingDateRepository.delete(firstSnowClearingDateForCurrentBuilding);
    snowClearingDateRepository.delete(secondSnowClearingDateForCurrentBuilding);

    snowClearingDateRepository.save(snowClearingDateTempFirst);
    snowClearingDateRepository.save(snowClearingDateTempSecond);

    return getAllForCurrentBuilding(currentUserId);
  }

  @Override
  public List<SnowClearingDate> createScheduleForCurrentBuilding(LocalDate from, LocalDate to, Long currentUserId) {
    Building currentUserBuilding = ((Apartment) this.userRepository.findById(currentUserId).getApartments().toArray()[0]).getBuilding();

    List<User> allUsers = Lists.newArrayList(userRepository.findAll());
    List<User> allUsersForCurrentGroup = new ArrayList<>();

    for(User user : allUsers) {
      if(user.getApartments().isEmpty()) {
        continue;
      }

      if(((Apartment) user.getApartments().toArray()[0]).getBuilding().getId() == currentUserBuilding.getId()) {
        allUsersForCurrentGroup.add(user);
      }
    }

    Collections.shuffle(allUsersForCurrentGroup);

    List<SnowClearingDate> snowClearingDates = new ArrayList<>();
    int i = 0;
    for (LocalDate date = from; date.isBefore(to) || date.isEqual(to); date = date.plusDays(1)) {
      SnowClearingDate snc = new SnowClearingDate(date, allUsersForCurrentGroup.get(i), false);
      snowClearingDates.add(snc);
      i++;
      if (i == allUsersForCurrentGroup.size()) {
        i = 0;
      }
    }

    return Lists.newArrayList(snowClearingDateRepository.save(snowClearingDates));
  }

  private SnowClearingDate getSnowClearingDateForCurrentGroup(LocalDate date, Building currentUserBuilding) {
    List<SnowClearingDate> snowClearingDatesForFirstDate = snowClearingDateRepository.findAllByClearingDate(date);

    for(SnowClearingDate snowClearingDate : snowClearingDatesForFirstDate) {
      if(((Apartment) snowClearingDate.getUser().getApartments().toArray()[0]).getBuilding().getId() == currentUserBuilding.getId()) {
        return snowClearingDate;
      }
    }

    return null;
  }
}

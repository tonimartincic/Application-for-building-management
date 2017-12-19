package hr.fer.opp.eureka.service.impl;

import com.google.common.collect.Lists;
import hr.fer.opp.eureka.domain.SnowClearingDate;
import hr.fer.opp.eureka.domain.User;
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
  public List<SnowClearingDate> getAll() {
    return Lists.newArrayList(snowClearingDateRepository.findAll());
  }

  @Override
  public SnowClearingDate add(SnowClearingDate snowClearingDate) {
    return this.snowClearingDateRepository.save(snowClearingDate);
  }

  @Override
  public SnowClearingDate askChange(LocalDate clearingDate) {
    SnowClearingDate snowClearingDateTemp = snowClearingDateRepository.findByClearingDate(clearingDate);

    snowClearingDateTemp.setAskChange(true);

    return snowClearingDateRepository.save(snowClearingDateTemp);
  }

  @Override
  public void createSchedule(LocalDate from, LocalDate to) {
    List<SnowClearingDate> snowClearingDates = new ArrayList<>();
    List<User> userList = new ArrayList<>();
    Iterable<User> allUsers = userRepository.findAll();
    for (User user : allUsers) {
      userList.add(user);
    }
    Collections.shuffle(userList);

    int i = 0;
    for (LocalDate date = from; date.isBefore(to); date = date.plusDays(1)) {
      SnowClearingDate snc = new SnowClearingDate(date, userList.get(i), false);
      snowClearingDates.add(snc);
      i++;
      if (i == userList.size() - 1) {
        i = 0;
      }
    }

    snowClearingDateRepository.save(snowClearingDates);
  }
}

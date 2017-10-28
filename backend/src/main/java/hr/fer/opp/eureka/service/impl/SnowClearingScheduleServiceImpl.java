package hr.fer.opp.eureka.service.impl;

import com.google.common.collect.Lists;
import hr.fer.opp.eureka.domain.SnowClearingSchedule;
import hr.fer.opp.eureka.domain.User;
import hr.fer.opp.eureka.repository.SnowClearingScheduleRepository;
import hr.fer.opp.eureka.repository.UserRepository;
import hr.fer.opp.eureka.service.SnowClearingScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class SnowClearingScheduleServiceImpl implements SnowClearingScheduleService {

  private final SnowClearingScheduleRepository snowClearingScheduleRepository;

  private final UserRepository userRepository;

  @Autowired
  public SnowClearingScheduleServiceImpl(SnowClearingScheduleRepository snowClearingScheduleRepository, UserRepository userRepository) {
    this.snowClearingScheduleRepository = snowClearingScheduleRepository;
    this.userRepository = userRepository;
  }

  @Override
  public List<SnowClearingSchedule> getAll() {
    return Lists.newArrayList(snowClearingScheduleRepository.findAll());
  }

  @Override
  public void createSchedule(LocalDate from, LocalDate to) {
    List<SnowClearingSchedule> snowClearingSchedules = new ArrayList<>();
    List<User> userList = new ArrayList<>();
    Iterable<User> allUsers = userRepository.findAll();
    for (User user : allUsers) {
      userList.add(user);
    }
    Collections.shuffle(userList);

    int i = 0;
    for (LocalDate date = from; date.isBefore(to); date = date.plusDays(1)) {
      SnowClearingSchedule snc = new SnowClearingSchedule(date, userList.get(i), false);
      snowClearingSchedules.add(snc);
      i++;
      if (i == userList.size() - 1) {
        i = 0;
      }
    }

    snowClearingScheduleRepository.save(snowClearingSchedules);
  }


}


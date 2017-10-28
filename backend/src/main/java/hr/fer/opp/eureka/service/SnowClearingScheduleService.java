package hr.fer.opp.eureka.service;

import hr.fer.opp.eureka.domain.SnowClearingSchedule;

import java.time.LocalDate;
import java.util.List;

public interface SnowClearingScheduleService {

  List<SnowClearingSchedule> getAll();

  void createSchedule(LocalDate from, LocalDate to);

  SnowClearingSchedule add(SnowClearingSchedule snowClearingSchedule);
}

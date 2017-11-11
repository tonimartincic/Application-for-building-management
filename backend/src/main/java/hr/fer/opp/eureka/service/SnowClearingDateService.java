package hr.fer.opp.eureka.service;

import hr.fer.opp.eureka.domain.SnowClearingDate;

import java.time.LocalDate;
import java.util.List;

public interface SnowClearingDateService {

  List<SnowClearingDate> getAll();

  void createSchedule(LocalDate from, LocalDate to);

  SnowClearingDate add(SnowClearingDate snowClearingDate);
}

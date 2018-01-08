package hr.fer.opp.eureka.service;

import hr.fer.opp.eureka.domain.snowClearingDate.SnowClearingDate;

import java.time.LocalDate;
import java.util.List;

public interface SnowClearingDateService {

  List<SnowClearingDate> getAllForCurrentBuilding(Long currentUserId);

  List<SnowClearingDate> createScheduleForCurrentBuilding(LocalDate from, LocalDate to, Long currentUserId);

  SnowClearingDate add(SnowClearingDate snowClearingDate);

  SnowClearingDate askChangeForCurrentBuilding(LocalDate clearingDate, Long currentUserId);

  List<SnowClearingDate> approveChangesForCurrentBuilding(LocalDate firstDate, LocalDate secondDate, Long currentUserId);
}

package hr.fer.opp.eureka.repository;

import hr.fer.opp.eureka.domain.SnowClearingSchedule;
import org.springframework.data.repository.CrudRepository;

import java.time.LocalDate;

public interface SnowClearingScheduleRepository extends CrudRepository<SnowClearingSchedule, Long> {

  SnowClearingSchedule findByClearing_date(LocalDate date);
}

package hr.fer.opp.eureka.repository;

import hr.fer.opp.eureka.domain.snowClearingDate.SnowClearingDate;
import org.springframework.data.repository.CrudRepository;

import java.time.LocalDate;

public interface SnowClearingDateRepository extends CrudRepository<SnowClearingDate, Long> {

  SnowClearingDate findByClearingDate(LocalDate date);
}

package hr.fer.opp.eureka.repository;

import hr.fer.opp.eureka.domain.snowClearingDate.SnowClearingDate;
import org.springframework.data.repository.CrudRepository;

import java.time.LocalDate;
import java.util.List;

public interface SnowClearingDateRepository extends CrudRepository<SnowClearingDate, Long> {

  List<SnowClearingDate> findAllByClearingDate(LocalDate date);
}

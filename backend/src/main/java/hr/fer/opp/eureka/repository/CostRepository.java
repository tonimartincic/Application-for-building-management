package hr.fer.opp.eureka.repository;

import hr.fer.opp.eureka.domain.Cost;
import org.springframework.data.repository.CrudRepository;

public interface CostRepository extends CrudRepository<Cost, Long> {

  Cost findById(Long id);
}

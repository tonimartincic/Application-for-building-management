package hr.fer.opp.eureka.repository;

import hr.fer.opp.eureka.domain.building.Building;
import org.springframework.data.repository.CrudRepository;

public interface BuildingRepository extends CrudRepository<Building, Long> {

  Building findById(Long id);
}

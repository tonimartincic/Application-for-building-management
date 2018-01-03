package hr.fer.opp.eureka.repository;

import hr.fer.opp.eureka.domain.apartment.Apartment;
import org.springframework.data.repository.CrudRepository;

public interface ApartmentRepository extends CrudRepository<Apartment, Long> {

  Apartment findById(Long id);
}

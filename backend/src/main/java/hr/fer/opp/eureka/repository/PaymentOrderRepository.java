package hr.fer.opp.eureka.repository;

import hr.fer.opp.eureka.domain.PaymentOrder;
import org.springframework.data.repository.CrudRepository;

public interface PaymentOrderRepository extends CrudRepository<PaymentOrder, Long> {

  PaymentOrder findById(Long id);
}
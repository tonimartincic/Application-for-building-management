package hr.fer.opp.eureka.service;

import hr.fer.opp.eureka.domain.paymentOrder.PaymentOrder;
import hr.fer.opp.eureka.domain.paymentOrder.PaymentOrderRequest;

import java.util.List;

public interface PaymentOrderService {

  List<PaymentOrder> getAllForCurrentUser(Long currentUserId);

  PaymentOrder getById(Long id);

  PaymentOrder add(PaymentOrderRequest paymentOrderRequest);

  PaymentOrder edit(PaymentOrderRequest paymentOrderRequest);

  void deleteById(Long id);
}

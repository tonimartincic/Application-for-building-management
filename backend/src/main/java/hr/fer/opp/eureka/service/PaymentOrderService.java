package hr.fer.opp.eureka.service;

import hr.fer.opp.eureka.domain.paymentOrder.PaymentOrder;
import hr.fer.opp.eureka.domain.paymentOrder.PaymentOrderRequest;
import hr.fer.opp.eureka.domain.paymentOrder.PaymentOrderResponse;

import java.util.List;

public interface PaymentOrderService {

  List<PaymentOrderResponse> getAllForCurrentUser(Long currentUserId);

  PaymentOrderResponse getById(Long id);

  PaymentOrderResponse add(PaymentOrderRequest paymentOrderRequest);

  PaymentOrderResponse edit(PaymentOrderRequest paymentOrderRequest);

  void deleteById(Long id);
}

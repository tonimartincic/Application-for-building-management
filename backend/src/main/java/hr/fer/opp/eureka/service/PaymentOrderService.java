package hr.fer.opp.eureka.service;

import hr.fer.opp.eureka.domain.paymentOrder.PaymentOrder;

import java.util.List;

public interface PaymentOrderService {

  List<PaymentOrder> getAll();

  PaymentOrder getById(Long id);

  PaymentOrder add(PaymentOrder paymentOrder);
}

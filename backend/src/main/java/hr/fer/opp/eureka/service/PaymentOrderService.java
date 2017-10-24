package hr.fer.opp.eureka.service;

import hr.fer.opp.eureka.domain.PaymentOrder;

import java.util.List;

public interface PaymentOrderService {

  List<PaymentOrder> getAll();

  PaymentOrder getUserById(Long id);
}
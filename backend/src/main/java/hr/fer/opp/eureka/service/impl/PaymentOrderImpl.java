package hr.fer.opp.eureka.service.impl;

import com.google.common.collect.Lists;
import hr.fer.opp.eureka.domain.paymentOrder.PaymentOrder;
import hr.fer.opp.eureka.repository.PaymentOrderRepository;
import hr.fer.opp.eureka.service.PaymentOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentOrderImpl implements PaymentOrderService {

  private final PaymentOrderRepository paymentOrderRepository;

  @Autowired
  public PaymentOrderImpl(PaymentOrderRepository paymentOrderRepository) {
    this.paymentOrderRepository = paymentOrderRepository;
  }

  @Override
  public List<PaymentOrder> getAll() {
    return Lists.newArrayList(paymentOrderRepository.findAll());
  }

  @Override
  public PaymentOrder getById(Long id) {
    return paymentOrderRepository.findById(id);
  }

  @Override
  public PaymentOrder add(PaymentOrder paymentOrder) {
    return this.paymentOrderRepository.save(paymentOrder);
  }
}

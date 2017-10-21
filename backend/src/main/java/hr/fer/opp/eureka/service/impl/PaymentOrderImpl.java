package hr.fer.opp.eureka.service.impl;

import hr.fer.opp.eureka.domain.PaymentOrder;
import hr.fer.opp.eureka.repository.PaymentOrderRepostiory;
import hr.fer.opp.eureka.service.PaymentOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PaymentOrderImpl implements PaymentOrderService {

  private final PaymentOrderRepostiory paymentOrderRepostiory;

  @Autowired
  public PaymentOrderImpl(PaymentOrderRepostiory paymentOrderRepostiory) {
    this.paymentOrderRepostiory = paymentOrderRepostiory;
  }

  @Override
  public List<PaymentOrder> getAll() {
    List<PaymentOrder> temp = new ArrayList<>();
    Iterable<PaymentOrder> allPaymentOrders = paymentOrderRepostiory.findAll();

    for(PaymentOrder oth : allPaymentOrders) {
      temp.add(oth);
    }

    return temp;
  }

  @Override
  public PaymentOrder getUserById(Long id) {
    return paymentOrderRepostiory.findById(id);
  }
}

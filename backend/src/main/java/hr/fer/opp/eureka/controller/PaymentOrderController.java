package hr.fer.opp.eureka.controller;

import hr.fer.opp.eureka.domain.PaymentOrder;
import hr.fer.opp.eureka.service.PaymentOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PaymentOrderController {

  private final PaymentOrderService paymentOrderService;

  @Autowired
  public PaymentOrderController(PaymentOrderService paymentOrderService) {
    this.paymentOrderService = paymentOrderService;
  }

  @GetMapping ("/api/payment-orders")
  public List<PaymentOrder> getAllPaymentOrders() {
    return paymentOrderService.getAll();
  }

  @GetMapping ("api/payment-orders/{id}")
  public PaymentOrder getPaymentOrderById(@PathVariable Long id) {
    return paymentOrderService.getById(id);
  }

  @PostMapping("/api/payment-orders")
  public PaymentOrder addNewPaymentOrder(@RequestBody final PaymentOrder paymentOrder) {
    return paymentOrderService.add(paymentOrder);
  }
}

package hr.fer.opp.eureka.controller;

import hr.fer.opp.eureka.domain.paymentOrder.PaymentOrder;
import hr.fer.opp.eureka.domain.paymentOrder.PaymentOrderRequest;
import hr.fer.opp.eureka.domain.paymentOrder.PaymentOrderResponse;
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

  @GetMapping ("/api/payment-orders/current-user/{currentUserId}")
  public List<PaymentOrderResponse> getAllPaymentOrdersForCurrentUser(@PathVariable Long currentUserId) {
    return paymentOrderService.getAllForCurrentUser(currentUserId);
  }

  @GetMapping ("api/payment-orders/{id}")
  public PaymentOrderResponse getPaymentOrderById(@PathVariable Long id) {
    return paymentOrderService.getById(id);
  }

  @PostMapping("/api/payment-orders")
  public PaymentOrderResponse addNewPaymentOrder(@RequestBody final PaymentOrderRequest paymentOrderRequest) {
    return paymentOrderService.add(paymentOrderRequest);
  }

  @PutMapping("/api/payment-orders/edit")
  public PaymentOrderResponse editPaymentOrder(@RequestBody final PaymentOrderRequest paymentOrderRequest) {
    return this.paymentOrderService.edit(paymentOrderRequest);
  }

  @DeleteMapping("/api/payment-orders/{id}")
  public void deletePaymentOrderById(@PathVariable Long id) {
    this.paymentOrderService.deleteById(id);
  }
}

package hr.fer.opp.eureka.domain.paymentOrder;

import com.fasterxml.jackson.annotation.JsonFormat;
import hr.fer.opp.eureka.domain.cost.Cost;
import hr.fer.opp.eureka.domain.user.User;

import java.time.LocalDate;

public class PaymentOrderResponse {

  private Long id;

  private Double amount;

  private String description;

  @JsonFormat(pattern = "dd-MM-yyyy")
  private LocalDate paymentDue;

  @JsonFormat(pattern = "dd-MM-yyyy")
  private LocalDate dayOfPayment;

  private User payer;

  private User receiver;

  private String status;

  private Cost cost;

  public PaymentOrderResponse(PaymentOrder paymentOrder) {
    this.id = paymentOrder.getId();
    this.amount = paymentOrder.getAmount();
    this.description = paymentOrder.getDescription();
    this.paymentDue = paymentOrder.getPaymentDue();
    this.dayOfPayment = paymentOrder.getDayOfPayment();
    this.payer = paymentOrder.getPayer();
    this.receiver = paymentOrder.getReceiver();
    this.status = paymentOrder.getStatus().getName();
    this.cost = paymentOrder.getCost();
  }
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Double getAmount() {
    return amount;
  }

  public void setAmount(Double amount) {
    this.amount = amount;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public LocalDate getPaymentDue() {
    return paymentDue;
  }

  public void setPaymentDue(LocalDate paymentDue) {
    this.paymentDue = paymentDue;
  }

  public LocalDate getDayOfPayment() {
    return dayOfPayment;
  }

  public void setDayOfPayment(LocalDate dayOfPayment) {
    this.dayOfPayment = dayOfPayment;
  }

  public User getPayer() {
    return payer;
  }

  public void setPayer(User payer) {
    this.payer = payer;
  }

  public User getReceiver() {
    return receiver;
  }

  public void setReceiver(User receiver) {
    this.receiver = receiver;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public Cost getCost() {
    return cost;
  }

  public void setCost(Cost cost) {
    this.cost = cost;
  }
}

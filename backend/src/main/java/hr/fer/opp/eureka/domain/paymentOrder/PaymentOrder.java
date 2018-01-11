package hr.fer.opp.eureka.domain.paymentOrder;

import com.fasterxml.jackson.annotation.JsonFormat;
import hr.fer.opp.eureka.domain.cost.Cost;
import hr.fer.opp.eureka.domain.user.User;
import hr.fer.opp.eureka.enumeration.PaymentOrderStatus;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table (name = "payment_order")
public class PaymentOrder {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private Double amount;

  private String description;

  @JsonFormat(pattern = "dd-MM-yyyy")
  private LocalDate paymentDue;

  @JsonFormat(pattern = "dd-MM-yyyy")
  private LocalDate dayOfPayment;

  @ManyToOne
  @JoinColumn (name = "payer")
  private User payer;

  @ManyToOne
  @JoinColumn (name = "receiver")
  private User receiver;

  @Enumerated(EnumType.STRING)
  private PaymentOrderStatus status;

  @ManyToOne
  @JoinColumn (name = "cost_id")
  private Cost cost;

  public PaymentOrder() {
  }

  public PaymentOrder(
    Double amount,
    String description,
    LocalDate paymentDue,
    LocalDate dayOfPayment,
    User payer,
    User receiver,
    PaymentOrderStatus status,
    Cost cost
    ) {
  
    this.amount = amount;
    this.description = description;
    this.paymentDue = paymentDue;
    this.dayOfPayment = dayOfPayment;
    this.payer = payer;
    this.receiver = receiver;
    this.status = status;
    this.cost = cost;
  }

  public PaymentOrder(PaymentOrderRequest paymentOrderRequest) {
    this.id = paymentOrderRequest.getId();
    this.amount = paymentOrderRequest.getAmount();
    this.description = paymentOrderRequest.getDescription();
    this.paymentDue = paymentOrderRequest.getPaymentDue();
    this.dayOfPayment = paymentOrderRequest.getDayOfPayment();
    this.status = paymentOrderRequest.getStatus();
    this.cost = paymentOrderRequest.getCost();
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

  public PaymentOrderStatus getStatus() {
    return status;
  }

  public void setStatus(PaymentOrderStatus status) {
    this.status = status;
  }

  public Cost getCost() {
    return cost;
  }

  public void setCost(Cost cost) {
    this.cost = cost;
  }
}

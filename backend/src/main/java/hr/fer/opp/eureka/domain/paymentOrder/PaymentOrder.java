package hr.fer.opp.eureka.domain.paymentOrder;

import com.fasterxml.jackson.annotation.JsonFormat;
import hr.fer.opp.eureka.domain.user.User;

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

  public PaymentOrder() {
  }

  public PaymentOrder(
    Double amount,
    String description,
    LocalDate paymentDue,
    LocalDate dayOfPayment,
    User payer,
    User receiver) {
  
    this.amount = amount;
    this.description = description;
    this.paymentDue = paymentDue;
    this.dayOfPayment = dayOfPayment;
    this.payer = payer;
    this.receiver = receiver;
  }

  public PaymentOrder(PaymentOrderRequest paymentOrderRequest) {
    this.id = paymentOrderRequest.getId();
    this.amount = paymentOrderRequest.getAmount();
    this.description = paymentOrderRequest.getDescription();
    this.paymentDue = paymentOrderRequest.getPaymentDue();
    this.dayOfPayment = paymentOrderRequest.getDayOfPayment();
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
}

package hr.fer.opp.eureka.domain;

import com.fasterxml.jackson.annotation.JsonFormat;

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

  private Long payerId;

  private String payerType;

  private Long receiverId;

  private String receiverType;

  public PaymentOrder() {
  }

  public PaymentOrder(
    Double amount,
    String description,
    LocalDate paymentDue,
    LocalDate dayOfPayment,
    Long payerId,
    String payerType,
    Long receiverId,
    String receiverType) {
  
    this.amount = amount;
    this.description = description;
    this.paymentDue = paymentDue;
    this.dayOfPayment = dayOfPayment;
    this.payerId = payerId;
    this.payerType = payerType;
    this.receiverId = receiverId;
    this.receiverType = receiverType;
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

  public Long getPayerId() {
    return payerId;
  }

  public void setPayerId(Long payerId) {
    this.payerId = payerId;
  }

  public String getPayerType() {
    return payerType;
  }

  public void setPayerType(String payerType) {
    this.payerType = payerType;
  }

  public Long getReceiverId() {
    return receiverId;
  }

  public void setReceiverId(Long receiverId) {
    this.receiverId = receiverId;
  }

  public String getReceiverType() {
    return receiverType;
  }

  public void setReceiverType(String receiverType) {
    this.receiverType = receiverType;
  }
}

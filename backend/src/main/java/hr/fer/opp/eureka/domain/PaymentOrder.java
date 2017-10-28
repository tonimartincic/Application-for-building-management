package hr.fer.opp.eureka.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table (name = "payment_order")
public class PaymentOrder {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private Double amount;

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

  public Long getPayer() {
    return payer;
  }

  public void setPayer(Long payer) {
    this.payer = payer;
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

  public Long getReciever() {
    return reciever;
  }

  public void setReciever(Long reciever) {
    this.reciever = reciever;
  }

  public String getPayerType() {
    return payerType;
  }

  public void setPayerType(String payerType) {
    this.payerType = payerType;
  }

  public String getReceiverType() {
    return receiverType;
  }

  public void setReceiverType(String receiverType) {
    this.receiverType = receiverType;
  }

  private Long payer;

  private String description;

  @JsonFormat(pattern = "dd-MM-yyyy")
  private LocalDate paymentDue;

  @JsonFormat(pattern = "dd-MM-yyyy")
  private LocalDate dayOfPayment;

  private Long receiver;

  private String payerType;

  private String receiverType;

  public PaymentOrder() {
  }

  public PaymentOrder(Double amount, Long payer, String description, LocalDate paymentDue, LocalDate dayOfPayment, Long receiver, String payerType, String receiverType) {
    this.amount = amount;
    this.payer = payer;
    this.description = description;
    this.paymentDue = paymentDue;
    this.dayOfPayment = dayOfPayment;
    this.receiver = receiver;
    this.payerType = payerType;
    this.receiverType = receiverType;
  }
}

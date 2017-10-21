package hr.fer.opp.eureka.domain;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
@Table (name = "payment_order")
public class PaymentOrder {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private Double amount;

  private Long payer;

  private String description;

  private LocalDate paymentDue;

  private LocalDate dayOfPayment;

  private Long reciever;

  private String payerType;

  private String receiverType;

  public PaymentOrder() {
  }

  public PaymentOrder(Double amount, Long payer, String description, LocalDate paymentDue, LocalDate dayOfPayment, Long reciever, String payerType, String receiverType) {
    this.amount = amount;
    this.payer = payer;
    this.description = description;
    this.paymentDue = paymentDue;
    this.dayOfPayment = dayOfPayment;
    this.reciever = reciever;
    this.payerType = payerType;
    this.receiverType = receiverType;
  }
}

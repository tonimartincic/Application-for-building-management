package hr.fer.opp.eureka.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
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

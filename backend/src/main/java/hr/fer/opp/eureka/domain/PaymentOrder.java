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
}

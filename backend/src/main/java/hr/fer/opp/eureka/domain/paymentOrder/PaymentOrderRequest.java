package hr.fer.opp.eureka.domain.paymentOrder;

import com.fasterxml.jackson.annotation.JsonFormat;
import hr.fer.opp.eureka.domain.cost.Cost;
import hr.fer.opp.eureka.domain.user.User;
import hr.fer.opp.eureka.enumeration.PaymentOrderStatus;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.time.LocalDate;

public class PaymentOrderRequest {

  private Long id;

  private Double amount;

  private String description;

  @JsonFormat(pattern = "dd-MM-yyyy")
  private LocalDate paymentDue;

  @JsonFormat(pattern = "dd-MM-yyyy")
  private LocalDate dayOfPayment;

  private Long payerId;

  private Long receiverId;

  private String status;

  private Long costId;

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

  public Long getReceiverId() {
    return receiverId;
  }

  public void setReceiverId(Long receiverId) {
    this.receiverId = receiverId;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public Long getCostId() {
    return costId;
  }

  public void setCostId(Long costId) {
    this.costId = costId;
  }
}

package hr.fer.opp.eureka.domain.cost;

import com.fasterxml.jackson.annotation.JsonFormat;
import hr.fer.opp.eureka.domain.user.User;

import java.time.LocalDate;

public class CostResponse {

  private Long id;

  private User creator;

  private Double amount;

  private String description;

  @JsonFormat(pattern = "dd-MM-yyyy")
  private LocalDate createdOn;

  private Boolean isUrgent;

  private String status;

  public CostResponse(Cost cost) {
    this.id = cost.getId();
    this.creator = cost.getCreator();
    this.amount = cost.getAmount();
    this.description = cost.getDescription();
    this.createdOn = cost.getCreatedOn();
    this.isUrgent = cost.getUrgent();
    this.status = cost.getStatus().getName();
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public User getCreator() {
    return creator;
  }

  public void setCreator(User creator) {
    this.creator = creator;
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

  public LocalDate getCreatedOn() {
    return createdOn;
  }

  public void setCreatedOn(LocalDate createdOn) {
    this.createdOn = createdOn;
  }

  public Boolean getUrgent() {
    return isUrgent;
  }

  public void setUrgent(Boolean urgent) {
    isUrgent = urgent;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }
}

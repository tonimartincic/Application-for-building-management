package hr.fer.opp.eureka.domain.cost;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDate;

public class CostRequest {

  private Long id;

  private Long creatorId;

  private Double amount;

  private String description;

  @JsonFormat(pattern = "dd-MM-yyyy")
  private LocalDate createdOn;

  private Boolean isUrgent;

  private String status;

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

  public Boolean getUrgent() {
    return isUrgent;
  }

  public void setUrgent(Boolean urgent) {
    isUrgent = urgent;
  }

  public LocalDate getCreatedOn() {
    return createdOn;
  }

  public void setCreatedOn(LocalDate createdOn) {
    this.createdOn = createdOn;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public Long getCreatorId() {
    return creatorId;
  }

  public void setCreatorId(Long creatorId) {
    this.creatorId = creatorId;
  }
}

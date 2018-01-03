package hr.fer.opp.eureka.domain.cost;

public class CostRequest {

  private Long creatorId;

  private Double amount;

  private String description;

  private Boolean isUrgent;

  private String status;

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

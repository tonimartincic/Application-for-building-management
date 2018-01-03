package hr.fer.opp.eureka.domain.cost;

import com.fasterxml.jackson.annotation.JsonFormat;
import hr.fer.opp.eureka.domain.user.User;
import hr.fer.opp.eureka.enumeration.CostStatus;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "cost")
public class Cost {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  @JoinColumn (name = "creator_id")
  private User creator;

  private Double amount;

  private String description;

  @JsonFormat(pattern = "dd-MM-yyyy")
  private LocalDate createdOn;

  private Boolean isUrgent;

  @Enumerated(EnumType.STRING)
  private CostStatus status;

  public Cost() {
  }

  public Cost(User creator, Double amount, String description, Boolean isUrgent, CostStatus status) {
    this.creator = creator;
    this.amount = amount;
    this.description = description;
    this.isUrgent = isUrgent;
    this.status = status;
  }

  public Cost(CostRequest costRequest) {
    this.id = costRequest.getId();
    this.amount = costRequest.getAmount();
    this.description = costRequest.getDescription();
    this.createdOn = costRequest.getCreatedOn();
    this.isUrgent = costRequest.getUrgent();
    this.status = CostStatus.getByName(costRequest.getStatus());
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

  public Double getAmount() {
    return amount;
  }

  public String getDescription() {
    return description;
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

  public CostStatus getStatus() {
    return status;
  }

  public void setCreator(User creator) {
    this.creator = creator;
  }

  public void setAmount(Double amount) {
    this.amount = amount;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public void setUrgent(Boolean urgent) {
    isUrgent = urgent;
  }

  public void setStatus(CostStatus status) {
    this.status = status;
  }
}

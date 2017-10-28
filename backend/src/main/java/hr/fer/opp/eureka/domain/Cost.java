package hr.fer.opp.eureka.domain;

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
  private final User creator;

  private final Double amount;

  private final String description;

  private LocalDate createdOn;

  private final Boolean isUrgent;

  private final String status;

  public Cost(User creator, Double amount, String description, Boolean isUrgent, String status) {
    this.creator = creator;
    this.amount = amount;
    this.description = description;
    this.isUrgent = isUrgent;
    this.status = status;
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

  public String getStatus() {
    return status;
  }
}

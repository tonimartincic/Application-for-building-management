package hr.fer.opp.eureka.domain;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
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

  private LocalDate createdOn;

  private Boolean isUrgent;

  private String status;

  public Cost(User creator, Double amount, String description, Boolean isUrgent, String status) {
    this.creator = creator;
    this.amount = amount;
    this.description = description;
    this.isUrgent = isUrgent;
    this.status = status;
  }
}

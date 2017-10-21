package hr.fer.opp.eureka.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table (name = "user_notification")
public class UserNotification {

  @Id
  @GeneratedValue (strategy = GenerationType.IDENTITY)
  private Long id;

  private String description;

  @ManyToOne
  @JoinColumn (name="user_id")
  private User user;

  public UserNotification() {
  }

  public UserNotification(Long id, String description, User user) {
    this.id = id;
    this.description = description;
    this.user = user;
  }
}

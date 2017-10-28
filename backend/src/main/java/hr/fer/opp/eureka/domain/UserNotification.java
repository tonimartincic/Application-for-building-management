package hr.fer.opp.eureka.domain;

import javax.persistence.*;

@Entity
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

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }
}

package hr.fer.opp.eureka.domain.userNotification;

import hr.fer.opp.eureka.domain.user.User;

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

  private Boolean isRead;

  public UserNotification() {
  }

  public UserNotification(Long id, String description, User user, Boolean isRead) {
    this.id = id;
    this.description = description;
    this.user = user;
    this.isRead = isRead;
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

  public Boolean getRead() {
    return isRead;
  }

  public void setRead(Boolean read) {
    this.isRead = read;
  }
}

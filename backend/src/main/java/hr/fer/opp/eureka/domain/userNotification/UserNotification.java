package hr.fer.opp.eureka.domain.userNotification;

import com.fasterxml.jackson.annotation.JsonFormat;
import hr.fer.opp.eureka.domain.user.User;

import javax.persistence.*;
import java.time.LocalDate;

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

  @JsonFormat(pattern = "dd-MM-yyyy")
  private LocalDate creationDate;

  public UserNotification() {
  }

  public UserNotification(Long id, String description, User user, Boolean isRead, LocalDate creationDate) {
    this.id = id;
    this.description = description;
    this.user = user;
    this.isRead = isRead;
    this.creationDate = creationDate;
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

  public LocalDate getCreationDate() { return creationDate; }

  public void setCreationDate(LocalDate creationDate) { this.creationDate = creationDate; }
}

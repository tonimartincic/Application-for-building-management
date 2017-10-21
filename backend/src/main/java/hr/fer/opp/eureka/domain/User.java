package hr.fer.opp.eureka.domain;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table (name = "app_user")
public class User {

  @Id
  private String id;

  private String privilege;

  private Long apartmentId;

  private Boolean reminder;

  @OneToMany (mappedBy = "id", cascade = CascadeType.ALL)
  private List<UserNotification> userNotificationList;

  public User() {
  }

  public User(String id, String privilege, Long apartmentId, Boolean reminder) {
    this.id = id;
    this.privilege = privilege;
    this.apartmentId = apartmentId;
    this.reminder = reminder;
  }
}

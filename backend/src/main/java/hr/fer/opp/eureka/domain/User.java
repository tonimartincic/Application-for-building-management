package hr.fer.opp.eureka.domain;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
@Table (name = "app_user")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
  private Set<Announcement> announcementSet;

  private String privilege;

  private Long apartmentId;

  private Boolean reminder;

  public User() {
  }

  public User(Long id, String privilege, Long apartmentId, Boolean reminder) {
    this.id = id;
    this.privilege = privilege;
    this.apartmentId = apartmentId;
    this.reminder = reminder;
  }
}

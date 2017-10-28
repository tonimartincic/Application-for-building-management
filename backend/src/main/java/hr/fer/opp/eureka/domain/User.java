package hr.fer.opp.eureka.domain;

import lombok.Data;

import javax.persistence.*;
import java.util.List;
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

  private String firstName;

  private String lastName;

  private String mail;

  private String privilege;

  private Boolean reminder;

  @OneToMany (mappedBy = "user", cascade = CascadeType.ALL)
  private List<UserNotification> userNotificationList;

  @OneToMany (mappedBy = "creator", cascade = CascadeType.ALL)
  private Set<Cost> costs;

  @OneToMany (mappedBy = "landlord", cascade = CascadeType.ALL)
  private Set<Building> buildings;

  @OneToMany (mappedBy = "owner", cascade = CascadeType.ALL)
  private Set<Apartment> apartments;

  public User() {
  }

  public User(
    Long id,
    String firstName,
    String lastName,
    String mail,
    String privilege,
    Boolean reminder) {

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.mail=mail;
    this.privilege = privilege;
    this.reminder = reminder;
  }
}

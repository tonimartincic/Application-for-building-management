package hr.fer.opp.eureka.domain;

import lombok.Data;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table (name = "app_user")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
  private Set<Announcement> announcementSet;

  private String firstName;

  private String lastName;

  private String privilege;

  private Long apartmentId;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getPrivilege() {
    return privilege;
  }

  public void setPrivilege(String privilege) {
    this.privilege = privilege;
  }

  public Long getApartmentId() {
    return apartmentId;
  }

  public void setApartmentId(Long apartmentId) {
    this.apartmentId = apartmentId;
  }

  public Boolean getReminder() {
    return reminder;
  }

  public void setReminder(Boolean reminder) {
    this.reminder = reminder;
  }

  public List<UserNotification> getUserNotificationList() {
    return userNotificationList;
  }

  public void setUserNotificationList(List<UserNotification> userNotificationList) {
    this.userNotificationList = userNotificationList;
  }

  public Set<Cost> getCosts() {
    return costs;
  }

  public void setCosts(Set<Cost> costs) {
    this.costs = costs;
  }

  private Boolean reminder;

  @OneToMany (mappedBy = "user", cascade = CascadeType.ALL)
  private List<UserNotification> userNotificationList;

  @OneToMany (mappedBy = "creator", cascade = CascadeType.ALL)
  private Set<Cost> costs;

  public User() {
  }

  public User(
    Long id,
    String firstName,
    String lastName,
    String privilege,
    Long apartmentId,
    Boolean reminder) {

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.privilege = privilege;
    this.apartmentId = apartmentId;
    this.reminder = reminder;
  }
}

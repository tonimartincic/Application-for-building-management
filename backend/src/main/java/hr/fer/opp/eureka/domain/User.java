package hr.fer.opp.eureka.domain;

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
    String privilege,
    Boolean reminder) {

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.privilege = privilege;
    this.reminder = reminder;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Set<Announcement> getAnnouncementSet() {
    return announcementSet;
  }

  public void setAnnouncementSet(Set<Announcement> announcementSet) {
    this.announcementSet = announcementSet;
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

  public Set<Building> getBuildings() {
    return buildings;
  }

  public void setBuildings(Set<Building> buildings) {
    this.buildings = buildings;
  }

  public Set<Apartment> getApartments() {
    return apartments;
  }

  public void setApartments(Set<Apartment> apartments) {
    this.apartments = apartments;
  }
}

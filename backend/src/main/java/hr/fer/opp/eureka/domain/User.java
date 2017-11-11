package hr.fer.opp.eureka.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table (name = "app_user")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String firstName;

  private String lastName;

  private String mail;

  private String privilege;

  private Boolean reminder;

  @JsonIgnore
  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
  private Set<Announcement> announcementSet;

  @JsonIgnore
  @OneToMany (mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private List<UserNotification> userNotificationList;

  @JsonIgnore
  @OneToMany (mappedBy = "creator", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private Set<Cost> costs;

  @JsonIgnore
  @OneToMany (mappedBy = "landlord", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private Set<Building> buildings;

  @JsonIgnore
  @OneToMany (mappedBy = "owner", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private Set<Apartment> apartments;

  @JsonIgnore
  @OneToMany (mappedBy = "payer", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private Set<PaymentOrder> paymentOrdersToPay;

  @JsonIgnore
  @OneToMany (mappedBy = "receiver", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private Set<PaymentOrder> paymentOrdersToReceive;

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
    this.mail = mail;
    this.privilege = privilege;
    this.reminder = reminder;
    this.mail = mail;
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

  public String getMail() {
    return mail;
  }

  public void setMail(String mail) {
    this.mail = mail;
  }

  public Set<PaymentOrder> getPaymentOrdersToPay() {
    return paymentOrdersToPay;
  }

  public void setPaymentOrdersToPay(Set<PaymentOrder> paymentOrdersToPay) {
    this.paymentOrdersToPay = paymentOrdersToPay;
  }

  public Set<PaymentOrder> getPaymentOrdersToReceive() {
    return paymentOrdersToReceive;
  }

  public void setPaymentOrdersToReceive(Set<PaymentOrder> paymentOrdersToReceive) {
    this.paymentOrdersToReceive = paymentOrdersToReceive;
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

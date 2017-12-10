package hr.fer.opp.eureka.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table (name = "app_user")
public class User {

  public static final PasswordEncoder PASSWORD_ENCODER = new BCryptPasswordEncoder();

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String firstName;

  private String lastName;

  private String mail;

  private String privilege;

  private Boolean reminder;

  private String password;

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
  private Set<Building> landlordBuildingSet;

  @JsonIgnore
  @OneToMany (mappedBy = "manager", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private Set<Building> managerBuildingSet;

  @JsonIgnore
  @OneToMany (mappedBy = "owner", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private Set<Apartment> apartments;

  @JsonIgnore
  @OneToMany (mappedBy = "payer", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private Set<PaymentOrder> paymentOrdersToPay;

  @JsonIgnore
  @OneToMany (mappedBy = "receiver", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  private Set<PaymentOrder> paymentOrdersToReceive;

  private String[] roles;

  public User() {
  }

  public User(
    Long id,
    String firstName,
    String lastName,
    String mail,
    String privilege,
    Boolean reminder,
    String password,
    String... roles) {

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.mail = mail;
    this.privilege = privilege;
    this.reminder = reminder;
    this.mail = mail;
    this.setPassword(password);
    this.roles = roles;
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

  public Set<Apartment> getApartments() {
    return apartments;
  }

  public void setApartments(Set<Apartment> apartments) {
    this.apartments = apartments;
  }

  public String getMail() {
    return mail;
  }

  public void setMail(String mail) {
    this.mail = mail;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = PASSWORD_ENCODER.encode(password);
  }

  public Set<Building> getLandlordBuildingSet() {
    return landlordBuildingSet;
  }

  public void setLandlordBuildingSet(Set<Building> landlordBuildingSet) {
    this.landlordBuildingSet = landlordBuildingSet;
  }

  public Set<Building> getManagerBuildingSet() {
    return managerBuildingSet;
  }

  public void setManagerBuildingSet(Set<Building> managerBuildingSet) {
    this.managerBuildingSet = managerBuildingSet;
  }

  public String[] getRoles() {
    return roles;
  }

  public void setRoles(String[] roles) {
    this.roles = roles;
  }
}

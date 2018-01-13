package hr.fer.opp.eureka.domain.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import hr.fer.opp.eureka.domain.announcement.Announcement;
import hr.fer.opp.eureka.domain.apartment.Apartment;
import hr.fer.opp.eureka.domain.building.Building;
import hr.fer.opp.eureka.domain.cost.Cost;
import hr.fer.opp.eureka.domain.paymentOrder.PaymentOrder;
import hr.fer.opp.eureka.domain.snowClearingDate.SnowClearingDate;
import hr.fer.opp.eureka.domain.userNotification.UserNotification;
import hr.fer.opp.eureka.enumeration.UserPrivilege;

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

  @Enumerated(EnumType.STRING)
  private UserPrivilege privilege;

  private Boolean reminder;

  private String password;

  private String IBAN;

  @JsonIgnore
  @OneToMany(mappedBy = "user")
  private Set<Announcement> announcementSet;

  @JsonIgnore
  @OneToMany (mappedBy = "user", fetch = FetchType.LAZY)
  private List<UserNotification> userNotificationList;

  @JsonIgnore
  @OneToMany (mappedBy = "creator", fetch = FetchType.LAZY)
  private Set<Cost> costs;

  @JsonIgnore
  @OneToMany (mappedBy = "landlord", fetch = FetchType.LAZY)
  private Set<Building> landlordBuildingSet;

  @JsonIgnore
  @OneToMany (mappedBy = "manager", fetch = FetchType.LAZY)
  private Set<Building> managerBuildingSet;

  @JsonIgnore
  @OneToMany (mappedBy = "owner", fetch = FetchType.LAZY)
  private Set<Apartment> apartments;

  @JsonIgnore
  @OneToMany (mappedBy = "payer", fetch = FetchType.LAZY)
  private Set<PaymentOrder> paymentOrdersToPay;

  @JsonIgnore
  @OneToMany (mappedBy = "receiver", fetch = FetchType.LAZY)
  private Set<PaymentOrder> paymentOrdersToReceive;

  @JsonIgnore
  @OneToMany (mappedBy = "user", fetch = FetchType.LAZY)
  private Set<SnowClearingDate> snowClearingDates;

  public User() {
  }

  public User(
    Long id,
    String firstName,
    String lastName,
    String mail,
    UserPrivilege privilege,
    Boolean reminder,
    String password,
    String IBAN) {

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.mail = mail;
    this.privilege = privilege;
    this.reminder = reminder;
    this.mail = mail;
    this.password = password;
    this.IBAN = IBAN;
  }

  public User(UserRequest userRequest) {
    this.id = userRequest.getId();
    this.firstName = userRequest.getFirstName();
    this.lastName = userRequest.getLastName();
    this.mail = userRequest.getMail();
    this.privilege = UserPrivilege.getByName(userRequest.getPrivilege());
    this.password = userRequest.getPassword();
    this.reminder = userRequest.getReminder();
    this.IBAN = userRequest.getIBAN();
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

  public UserPrivilege getPrivilege() {
    return privilege;
  }

  public void setPrivilege(UserPrivilege privilege) {
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

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public Set<SnowClearingDate> getSnowClearingDates() {
    return snowClearingDates;
  }

  public void setSnowClearingDates(Set<SnowClearingDate> snowClearingDates) {
    this.snowClearingDates = snowClearingDates;
  }

  public String getIBAN() {
    return IBAN;
  }

  public void setIBAN(String IBAN) {
    this.IBAN = IBAN;
  }
}

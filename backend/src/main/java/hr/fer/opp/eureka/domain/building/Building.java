package hr.fer.opp.eureka.domain.building;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.google.common.base.Objects;
import hr.fer.opp.eureka.domain.apartment.Apartment;
import hr.fer.opp.eureka.domain.announcement.Announcement;
import hr.fer.opp.eureka.domain.user.User;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "building")
public class Building {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String address;

  private String IBAN;

  @ManyToOne
  @JoinColumn (name = "landlord")
  private User landlord;

  @ManyToOne
  @JoinColumn (name = "manager")
  private User manager;

  private Float funds;

  @JsonIgnore
  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
  private Set<Announcement> announcementSet;

  @JsonIgnore
  @OneToMany (mappedBy = "building", cascade = CascadeType.ALL)
  private Set<Apartment> apartments;

  public Building() {
  }

  public Building(Long id, String address, User landlord, Float funds) {
    this.id = id;
    this.address = address;
    this.landlord = landlord;
    this.funds = funds;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public User getLandlord() {
    return landlord;
  }

  public void setLandlord(User landlord) {
    this.landlord = landlord;
  }

  public Float getFunds() {
    return funds;
  }

  public void setFunds(Float funds) {
    this.funds = funds;
  }

  public Set<Apartment> getApartments() {
    return apartments;
  }

  public void setApartments(Set<Apartment> apartments) {
    this.apartments = apartments;
  }

  public Set<Announcement> getAnnouncementSet() {
    return announcementSet;
  }

  public void setAnnouncementSet(Set<Announcement> announcementSet) {
    this.announcementSet = announcementSet;
  }

  public User getManager() {
    return manager;
  }

  public void setManager(User manager) {
    this.manager = manager;
  }

  public String getIBAN() {
    return IBAN;
  }

  public void setIBAN(String IBAN) {
    this.IBAN = IBAN;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Building building = (Building) o;
    return Objects.equal(id, building.id);
  }

  @Override
  public int hashCode() {
    return Objects.hashCode(id);
  }
}

package hr.fer.opp.eureka.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "building")
public class Building {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String address;

  @ManyToOne
  @JoinColumn (name = "landlord")
  private User landlord;

  private Float funds;

  @JsonIgnore
  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
  private Set<Announcement> announcementSet;

  @JsonIgnore
  @OneToMany (mappedBy = "id", cascade = CascadeType.ALL)
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
}

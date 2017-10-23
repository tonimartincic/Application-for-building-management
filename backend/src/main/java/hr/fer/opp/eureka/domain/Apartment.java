package hr.fer.opp.eureka.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table (name = "apartment")
public class Apartment {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  @JoinColumn (name = "building_id")
  private Building building;

  private Integer area;

  private String contact;

  public Apartment(Long id, Building building, Integer area, String contact) {
    this.id = id;
    this.building = building;
    this.area = area;
    this.contact = contact;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Building getBuilding() {
    return building;
  }

  public void setBuilding(Building building) {
    this.building = building;
  }

  public Integer getArea() {
    return area;
  }

  public void setArea(Integer area) {
    this.area = area;
  }

  public String getContact() {
    return contact;
  }

  public void setContact(String contact) {
    this.contact = contact;
  }
}

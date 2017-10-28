package hr.fer.opp.eureka.domain;

import javax.persistence.*;

@Entity
@Table (name = "apartment")
public class Apartment {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private final Long id;

  @ManyToOne
  @JoinColumn (name = "owner_id")
  private User owner;

  @ManyToOne
  @JoinColumn (name = "building_id")
  private final Building building;

  private final Double area;

  public Apartment(Long id, Building building, Double area) {
    this.id = id;
    this.building = building;
    this.area = area;
  }

  public Long getId() {
    return id;
  }

  public User getOwner() {
    return owner;
  }

  public void setOwner(User owner) {
    this.owner = owner;
  }

  public Building getBuilding() {
    return building;
  }

  public Double getArea() {
    return area;
  }
}

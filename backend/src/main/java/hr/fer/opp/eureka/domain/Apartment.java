package hr.fer.opp.eureka.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table (name = "apartment")
public class Apartment {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  @JoinColumn (name = "owner_id")
  private User owner;

  @ManyToOne
  @JoinColumn (name = "building_id")
  private Building building;

  private Double area;

  public Apartment(Long id, Building building, Double area) {
    this.id = id;
    this.building = building;
    this.area = area;
  }
}

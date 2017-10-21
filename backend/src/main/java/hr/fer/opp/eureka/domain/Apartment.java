package hr.fer.opp.eureka.domain;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table (name = "apartment")
public class Apartment {

  @Id
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
}

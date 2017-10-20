package hr.fer.opp.eureka.domain;

import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
@Table(name = "building")
public class Building {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String address;
  private String landlord;


  @OneToMany (mappedBy = "id", cascade = CascadeType.ALL)
  private Set<Apartment> apartments;


  public Building() {
  }

  public Building(Long id, String address, String landlord) {
    this.id = id;
    this.address = address;
    this.landlord = landlord;
  }



}

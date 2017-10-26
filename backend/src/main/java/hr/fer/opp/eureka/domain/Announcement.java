package hr.fer.opp.eureka.domain;


import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name ="announcement")
public class Announcement {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private LocalDate creationDate;

  private LocalDate expirationDate;

  private String content;

  @ManyToOne
  @JoinColumn(name ="creator")
  private User user;

  public Announcement( User user, Long id, LocalDate expirationDate, String content) {
    this.user=user;
    this.id = id;
    this.creationDate= LocalDate.now();
    this.expirationDate=expirationDate;
    this.content=content;

  }

  public Announcement(){

  }

}

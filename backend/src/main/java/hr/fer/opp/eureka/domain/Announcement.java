package hr.fer.opp.eureka.domain;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name ="announcement")
public class Announcement {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @JsonFormat(pattern = "dd-MM-yyyy")
  private LocalDate creationDate;

  @JsonFormat(pattern = "dd-MM-yyyy")
  private LocalDate expirationDate;

  private String content;

  @ManyToOne
  @JoinColumn(name ="creator")
  private User user;

  public Announcement(){
  }

  public Announcement(User user, Long id, LocalDate expirationDate, String content) {
    this.user = user;
    this.id = id;
    creationDate = LocalDate.now();
    this.expirationDate = expirationDate;
    this.content = content;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public LocalDate getCreationDate() {
    return creationDate;
  }

  public void setCreationDate(LocalDate creationDate) {
    this.creationDate = creationDate;
  }

  public LocalDate getExpirationDate() {
    return expirationDate;
  }

  public void setExpirationDate(LocalDate expirationDate) {
    this.expirationDate = expirationDate;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }
}
